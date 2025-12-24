'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// Convert Cloudinary URL to always return JPG format (fixes HEIC display)
function getDisplayUrl(url) {
    if (!url) return url
    return url
        .replace(/\.(heic|heif)$/i, '.jpg')
        .replace('/upload/', '/upload/f_auto,q_auto/')
}
export default function AdminGalleryPage() {
    const router = useRouter()
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [uploading, setUploading] = useState(false)
    const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0, percent: 0, fileName: '' })
    const [editingImage, setEditingImage] = useState(null)
    const [editCaption, setEditCaption] = useState('')
    const [editSortOrder, setEditSortOrder] = useState(0)

    useEffect(() => {
        fetchImages()
    }, [])

    async function fetchImages() {
        try {
            const res = await fetch('/api/gallery')
            if (res.status === 401) {
                router.push('/admin/login')
                return
            }
            const data = await res.json()
            setImages(Array.isArray(data) ? data : [])
        } catch (error) {
            console.error('Failed to fetch gallery:', error)
            setImages([])
        } finally {
            setLoading(false)
        }
    }

    async function handleLogout() {
        await fetch('/api/auth/logout', { method: 'POST' })
        router.push('/admin/login')
    }

    async function uploadImage(file, fileName) {
        setUploading(true)
        setUploadProgress(prev => ({ ...prev, percent: 0, fileName }))

        try {
            // Get upload signature for 'gallery' folder
            const signRes = await fetch('/api/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ category: 'gallery' }),
            })

            if (!signRes.ok) {
                if (signRes.status === 401) {
                    router.push('/admin/login')
                    return null
                }
                throw new Error('Failed to get upload signature')
            }

            const { timestamp, signature, cloudName, apiKey, folder } = await signRes.json()

            const formDataUpload = new FormData()
            formDataUpload.append('file', file)
            formDataUpload.append('api_key', apiKey)
            formDataUpload.append('timestamp', timestamp)
            formDataUpload.append('signature', signature)
            formDataUpload.append('folder', folder)
            formDataUpload.append('upload_preset', 'ml_default')

            // Use XMLHttpRequest for progress tracking
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest()

                xhr.upload.addEventListener('progress', (e) => {
                    if (e.lengthComputable) {
                        const percent = Math.round((e.loaded / e.total) * 100)
                        setUploadProgress(prev => ({ ...prev, percent }))
                    }
                })

                xhr.addEventListener('load', () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        const uploadData = JSON.parse(xhr.responseText)
                        resolve({
                            url: uploadData.secure_url,
                            publicId: uploadData.public_id,
                        })
                    } else {
                        try {
                            const errorData = JSON.parse(xhr.responseText)
                            reject(new Error(errorData.error?.message || 'Upload failed'))
                        } catch {
                            reject(new Error('Upload failed'))
                        }
                    }
                })

                xhr.addEventListener('error', () => {
                    reject(new Error('Network error during upload'))
                })

                xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`)
                xhr.send(formDataUpload)
            })
        } catch (error) {
            console.error('Upload error:', error)
            alert('Upload failed: ' + error.message)
            return null
        } finally {
            setUploading(false)
            setUploadProgress({ current: 0, total: 0, percent: 0, fileName: '' })
        }
    }

    // Compress image using Canvas API
    async function compressImage(file, maxWidth = 2000, quality = 0.8) {
        return new Promise((resolve, reject) => {
            // Skip compression for HEIC files (Cloudinary handles these)
            const fileExtension = file.name.split('.').pop().toLowerCase()
            if (['heic', 'heif'].includes(fileExtension)) {
                resolve(file)
                return
            }

            const img = document.createElement('img')
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')

            img.onload = () => {
                // Calculate new dimensions
                let width = img.width
                let height = img.height

                if (width > maxWidth) {
                    height = (height * maxWidth) / width
                    width = maxWidth
                }

                canvas.width = width
                canvas.height = height

                // Draw and compress
                ctx.drawImage(img, 0, 0, width, height)

                canvas.toBlob(
                    (blob) => {
                        if (blob) {
                            // Create a new file with the compressed blob
                            const compressedFile = new File([blob], file.name, {
                                type: 'image/jpeg',
                                lastModified: Date.now(),
                            })
                            resolve(compressedFile)
                        } else {
                            resolve(file) // Fallback to original
                        }
                    },
                    'image/jpeg',
                    quality
                )
            }

            img.onerror = () => resolve(file) // Fallback to original on error

            // Read file as data URL
            const reader = new FileReader()
            reader.onload = (e) => {
                img.src = e.target.result
            }
            reader.onerror = () => resolve(file)
            reader.readAsDataURL(file)
        })
    }

    async function handleFileUpload(e) {
        const files = Array.from(e.target.files || [])
        if (files.length === 0) return

        const totalFiles = files.length
        let currentFile = 0

        for (const file of files) {
            currentFile++
            setUploadProgress({ current: currentFile, total: totalFiles, percent: 0, fileName: file.name })

            const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']
            const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif']
            const fileExtension = '.' + file.name.split('.').pop().toLowerCase()

            if (!allowedMimes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
                alert(`${file.name}: Only JPG, PNG, WebP, and HEIC images allowed`)
                continue
            }

            // Compress large images before upload (no size limit now!)
            let fileToUpload = file
            if (file.size > 1 * 1024 * 1024) { // If larger than 1MB, compress
                console.log(`Compressing ${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)...`)
                fileToUpload = await compressImage(file, 2000, 0.85)
                console.log(`Compressed to ${(fileToUpload.size / 1024 / 1024).toFixed(2)}MB`)
            }

            const imageData = await uploadImage(fileToUpload, file.name)
            if (imageData) {
                // Save to database
                const res = await fetch('/api/gallery', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        url: imageData.url,
                        publicId: imageData.publicId,
                        caption: '',
                        sortOrder: images.length,
                    }),
                })

                if (res.ok) {
                    fetchImages()
                } else {
                    alert('Failed to save image to database')
                }
            }
        }
        // Reset input and progress
        e.target.value = ''
        setUploadProgress({ current: 0, total: 0, percent: 0, fileName: '' })
    }

    async function handleDelete(image) {
        if (!confirm('Delete this image from gallery?')) return

        try {
            const res = await fetch(`/api/gallery/${image._id}`, {
                method: 'DELETE',
            })
            if (!res.ok) throw new Error('Delete failed')
            fetchImages()
        } catch (error) {
            alert(error.message)
        }
    }

    async function toggleFeatured(image) {
        try {
            const res = await fetch(`/api/gallery/${image._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...image,
                    featured: !image.featured,
                }),
            })
            if (!res.ok) throw new Error('Update failed')
            fetchImages()
        } catch (error) {
            alert(error.message)
        }
    }

    function openEditModal(image) {
        setEditingImage(image)
        setEditCaption(image.caption || '')
        setEditSortOrder(image.sortOrder || 0)
    }

    async function saveEdit() {
        if (!editingImage) return

        try {
            const res = await fetch(`/api/gallery/${editingImage._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    caption: editCaption,
                    sortOrder: editSortOrder,
                    featured: editingImage.featured,
                }),
            })
            if (!res.ok) throw new Error('Update failed')
            setEditingImage(null)
            fetchImages()
        } catch (error) {
            alert(error.message)
        }
    }

    // Stats
    const stats = {
        total: images.length,
        featured: images.filter(i => i.featured).length,
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-500">Loading gallery...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Gallery Management</h1>
                            <p className="text-sm text-gray-500">Manage your lookbook images</p>
                        </div>
                        <div className="flex gap-3">
                            <label className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-sm cursor-pointer">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                {uploading ? 'Uploading...' : 'Upload Images'}
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/jpeg,image/png,image/webp,image/heic,image/heif,.heic,.heif"
                                    multiple
                                    onChange={handleFileUpload}
                                    disabled={uploading}
                                />
                            </label>
                            <Link
                                href="/admin/products"
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                            >
                                Products
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Upload Progress Bar */}
            {uploading && uploadProgress.total > 0 && (
                <div className="bg-blue-50 border-b border-blue-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">
                                        Uploading {uploadProgress.current} of {uploadProgress.total}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate max-w-xs">
                                        {uploadProgress.fileName}
                                    </p>
                                </div>
                            </div>
                            <span className="text-lg font-bold text-blue-600">
                                {uploadProgress.percent}%
                            </span>
                        </div>
                        <div className="w-full bg-blue-200 rounded-full h-3 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-300 ease-out"
                                style={{ width: `${uploadProgress.percent}%` }}
                            />
                        </div>
                    </div>
                </div>
            )}

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                        <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                        <p className="text-sm text-gray-500">Total Images</p>
                    </div>
                    <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 shadow-sm">
                        <p className="text-3xl font-bold text-yellow-700">{stats.featured}</p>
                        <p className="text-sm text-yellow-600">Featured</p>
                    </div>
                </div>

                {/* Upload Zone (when empty) */}
                {images.length === 0 ? (
                    <div className="text-center py-16 bg-white/70 backdrop-blur-sm rounded-xl border-2 border-dashed border-gray-300">
                        <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-700 text-lg mb-2">No gallery images yet</p>
                        <p className="text-gray-500 text-sm mb-4">Click "Upload Images" to add your first images</p>
                    </div>
                ) : (
                    /* Images Grid */
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {images.map(image => (
                            <div key={image._id} className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300">
                                {/* Image */}
                                <div className="relative aspect-square bg-gray-100">
                                    <Image
                                        src={getDisplayUrl(image.url)}
                                        alt={image.caption || 'Gallery image'}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Featured Badge */}
                                    {image.featured && (
                                        <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                            ★ Featured
                                        </div>
                                    )}
                                    {/* Sort Order Badge */}
                                    <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                                        #{image.sortOrder}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="p-3">
                                    {image.caption && (
                                        <p className="text-sm text-gray-600 truncate mb-2">{image.caption}</p>
                                    )}
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => toggleFeatured(image)}
                                            className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors ${image.featured
                                                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                                }`}
                                        >
                                            {image.featured ? '★' : '☆'}
                                        </button>
                                        <button
                                            onClick={() => openEditModal(image)}
                                            className="flex-1 bg-blue-50 text-blue-600 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(image)}
                                            className="flex-1 bg-red-50 text-red-600 py-1.5 rounded-lg text-xs font-medium hover:bg-red-100 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            {/* Edit Modal */}
            {editingImage && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl w-full max-w-md border border-gray-200 shadow-2xl">
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Edit Image</h2>

                            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100">
                                <Image
                                    src={getDisplayUrl(editingImage.url)}
                                    alt="Preview"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Caption (optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={editCaption}
                                        onChange={(e) => setEditCaption(e.target.value)}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                        placeholder="Describe this image..."
                                        maxLength={200}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Sort Order
                                    </label>
                                    <input
                                        type="number"
                                        value={editSortOrder}
                                        onChange={(e) => setEditSortOrder(parseInt(e.target.value) || 0)}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Lower numbers appear first</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-6">
                                <button
                                    onClick={saveEdit}
                                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-colors"
                                >
                                    Save Changes
                                </button>
                                <button
                                    onClick={() => setEditingImage(null)}
                                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

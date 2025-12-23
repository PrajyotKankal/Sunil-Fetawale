'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function AdminProductsPage() {
    const router = useRouter()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [editingProduct, setEditingProduct] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [filterCategory, setFilterCategory] = useState('all')
    const [formData, setFormData] = useState({
        code: '',
        title: '',
        category: 'bridal',
        colorGroup: '',
        description: '',
        featured: false,
        sortOrder: 0,
        images: [],
    })
    const [uploading, setUploading] = useState(false)
    const [saving, setSaving] = useState(false)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        try {
            const res = await fetch('/api/products')
            if (res.status === 401) {
                router.push('/admin/login')
                return
            }
            const data = await res.json()
            setProducts(Array.isArray(data) ? data : [])
        } catch (error) {
            console.error('Failed to fetch products:', error)
            setProducts([])
        } finally {
            setLoading(false)
        }
    }

    async function handleLogout() {
        await fetch('/api/auth/logout', { method: 'POST' })
        router.push('/admin/login')
    }

    function openAddForm() {
        setEditingProduct(null)
        setFormData({
            code: '',
            title: '',
            category: 'bridal',
            colorGroup: '',
            description: '',
            featured: false,
            sortOrder: 0,
            images: [],
        })
        setErrors({})
        setShowForm(true)
    }

    function openEditForm(product) {
        setEditingProduct(product)
        setFormData({
            code: product.code,
            title: product.title,
            category: product.category,
            colorGroup: product.colorGroup,
            description: product.description || '',
            featured: product.featured,
            sortOrder: product.sortOrder || 0,
            images: product.images || [],
        })
        setErrors({})
        setShowForm(true)
    }

    async function uploadImage(file) {
        setUploading(true)
        try {
            const signRes = await fetch('/api/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ category: formData.category }),
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

            const uploadRes = await fetch(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                { method: 'POST', body: formDataUpload }
            )

            const uploadData = await uploadRes.json()

            if (!uploadRes.ok) {
                throw new Error(uploadData.error?.message || 'Upload failed')
            }

            return {
                url: uploadData.secure_url,
                publicId: uploadData.public_id,
            }
        } catch (error) {
            console.error('Upload error:', error)
            alert('Upload failed: ' + error.message)
            return null
        } finally {
            setUploading(false)
        }
    }

    async function handleImageUpload(e) {
        const file = e.target.files?.[0]
        if (!file) return

        const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif']
        const fileExtension = '.' + file.name.split('.').pop().toLowerCase()

        if (!allowedMimes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
            alert('Only JPG, PNG, WebP, and HEIC images allowed')
            return
        }
        if (file.size > 5 * 1024 * 1024) {
            alert('Max file size is 5MB')
            return
        }

        const imageData = await uploadImage(file)
        if (imageData) {
            setFormData(prev => ({
                ...prev,
                images: [...prev.images, imageData],
            }))
        }
    }

    function removeImage(index) {
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }))
    }

    function validateForm() {
        const newErrors = {}
        if (!formData.title.trim()) newErrors.title = 'Title is required'
        if (!formData.colorGroup.trim()) newErrors.colorGroup = 'Color group is required'
        if (formData.images.length === 0) newErrors.images = 'At least one image is required'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (!validateForm()) return

        setSaving(true)

        try {
            const url = editingProduct
                ? `/api/products/${editingProduct._id}`
                : '/api/products'

            const method = editingProduct ? 'PUT' : 'POST'

            const slug = formData.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, slug }),
            })

            if (!res.ok) {
                if (res.status === 401) {
                    router.push('/admin/login')
                    return
                }
                const data = await res.json()
                throw new Error(data.error || 'Save failed')
            }

            setShowForm(false)
            fetchProducts()
        } catch (error) {
            alert(error.message)
        } finally {
            setSaving(false)
        }
    }

    async function handleDelete(product) {
        if (!confirm(`Delete "${product.title}"?`)) return

        try {
            const res = await fetch(`/api/products/${product._id}`, {
                method: 'DELETE',
            })
            if (!res.ok) throw new Error('Delete failed')
            fetchProducts()
        } catch (error) {
            alert(error.message)
        }
    }

    async function toggleFeatured(product) {
        try {
            const res = await fetch(`/api/products/${product._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...product, featured: !product.featured }),
            })
            if (!res.ok) throw new Error('Update failed')
            fetchProducts()
        } catch (error) {
            alert(error.message)
        }
    }

    // Filter products
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.code?.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = filterCategory === 'all' || product.category === filterCategory
        return matchesSearch && matchesCategory
    })

    // Stats
    const stats = {
        total: products.length,
        bridal: products.filter(p => p.category === 'bridal').length,
        groom: products.filter(p => p.category === 'groom').length,
        baraat: products.filter(p => p.category === 'baraat').length,
        featured: products.filter(p => p.featured).length,
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-gray-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-500">Loading products...</p>
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
                            <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
                            <p className="text-sm text-gray-500">Manage your wedding accessories catalog</p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={openAddForm}
                                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Add Product
                            </button>
                            <Link
                                href="/admin/reports"
                                className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                Reports
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

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                        <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                        <p className="text-sm text-gray-500">Total Products</p>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-4 border border-pink-200 shadow-sm">
                        <p className="text-3xl font-bold text-pink-700">{stats.bridal}</p>
                        <p className="text-sm text-pink-600">Bridal</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 shadow-sm">
                        <p className="text-3xl font-bold text-blue-700">{stats.groom}</p>
                        <p className="text-sm text-blue-600">Groom</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200 shadow-sm">
                        <p className="text-3xl font-bold text-orange-700">{stats.baraat}</p>
                        <p className="text-sm text-orange-600">Baraat</p>
                    </div>
                    <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 shadow-sm">
                        <p className="text-3xl font-bold text-yellow-700">{stats.featured}</p>
                        <p className="text-sm text-yellow-600">Featured</p>
                    </div>
                </div>

                {/* Search & Filter */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mb-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search by title or code..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                            />
                        </div>
                        <div className="flex gap-2">
                            {['all', 'bridal', 'groom', 'baraat'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilterCategory(cat)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${filterCategory === cat
                                        ? 'bg-gray-900 text-white shadow-sm'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-16 bg-white/70 backdrop-blur-sm rounded-xl border border-amber-200 shadow-sm">
                        <svg className="w-16 h-16 text-amber-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <p className="text-amber-700 text-lg mb-2">
                            {products.length === 0 ? 'No products yet' : 'No products match your search'}
                        </p>
                        <p className="text-amber-600/70 text-sm">
                            {products.length === 0 ? 'Click "Add Product" to create your first product' : 'Try a different search or filter'}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map(product => (
                            <div key={product._id} className="bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200 overflow-hidden group hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                                {/* Image */}
                                <div className="relative aspect-square bg-amber-50">
                                    {product.images?.[0] ? (
                                        <Image
                                            src={product.images[0].url}
                                            alt={product.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <svg className="w-12 h-12 text-amber-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    )}
                                    {/* Featured Badge */}
                                    {product.featured && (
                                        <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            Featured
                                        </div>
                                    )}
                                    {/* Category Badge */}
                                    <div className={`absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded-full capitalize shadow-sm ${product.category === 'bridal' ? 'bg-pink-100 text-pink-700 border border-pink-200' :
                                        product.category === 'groom' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                                            'bg-orange-100 text-orange-700 border border-orange-200'
                                        }`}>
                                        {product.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <p className="text-xs text-amber-600 font-mono mb-1">{product.code}</p>
                                    <h3 className="text-amber-900 font-semibold line-clamp-1 mb-1">{product.title}</h3>
                                    <p className="text-amber-700/70 text-sm mb-3">{product.colorGroup}</p>

                                    {/* Actions */}
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => toggleFeatured(product)}
                                            className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${product.featured
                                                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                                }`}
                                            title={product.featured ? 'Remove from featured' : 'Add to featured'}
                                        >
                                            {product.featured ? '★' : '☆'}
                                        </button>
                                        <button
                                            onClick={() => openEditForm(product)}
                                            className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product)}
                                            className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
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

            {/* Add/Edit Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl">
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900">
                                {editingProduct ? 'Edit Product' : 'Add New Product'}
                            </h2>
                            <button
                                onClick={() => setShowForm(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            {/* Product Code & Category */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Product Code
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.code}
                                        onChange={(e) => setFormData(prev => ({ ...prev, code: e.target.value }))}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent disabled:opacity-50"
                                        placeholder="Auto-generated (e.g., BRD-001)"
                                        disabled={!!editingProduct}
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        {editingProduct ? 'Code cannot be changed' : 'Leave blank to auto-generate'}
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Category <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                    >
                                        <option value="bridal">Bridal</option>
                                        <option value="groom">Groom</option>
                                        <option value="baraat">Baraat</option>
                                    </select>
                                </div>
                            </div>

                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                    className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent ${errors.title ? 'border-red-500' : 'border-gray-200'
                                        }`}
                                    placeholder="e.g., Maroon Silk Bridal Ghunghat with Golden Border"
                                />
                                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                            </div>

                            {/* Color Group & Sort Order */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Color Group <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.colorGroup}
                                        onChange={(e) => setFormData(prev => ({ ...prev, colorGroup: e.target.value }))}
                                        className={`w-full px-4 py-2 bg-gray-50 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent ${errors.colorGroup ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                        placeholder="e.g., Red, Maroon, Pink"
                                    />
                                    {errors.colorGroup && <p className="text-red-500 text-sm mt-1">{errors.colorGroup}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Sort Order
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.sortOrder}
                                        onChange={(e) => setFormData(prev => ({ ...prev, sortOrder: parseInt(e.target.value) || 0 }))}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Lower numbers appear first</p>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description <span className="text-gray-500">(max 200 chars)</span>
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value.slice(0, 200) }))}
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
                                    rows={3}
                                    placeholder="Brief description of the product..."
                                />
                                <p className="text-xs text-gray-500 mt-1 text-right">{formData.description.length}/200</p>
                            </div>

                            {/* Featured Toggle */}
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, featured: !prev.featured }))}
                                    className={`relative w-12 h-6 rounded-full transition-colors ${formData.featured ? 'bg-gray-900' : 'bg-gray-300'
                                        }`}
                                >
                                    <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${formData.featured ? 'translate-x-6' : ''
                                        }`} />
                                </button>
                                <span className="text-gray-700 font-medium">Featured Product</span>
                            </div>

                            {/* Images */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Images <span className="text-red-500">*</span>
                                </label>

                                {/* Image Preview */}
                                {formData.images.length > 0 && (
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        {formData.images.map((img, index) => (
                                            <div key={index} className="relative group">
                                                <Image
                                                    src={img.url}
                                                    alt={`Product image ${index + 1}`}
                                                    width={100}
                                                    height={100}
                                                    className="object-cover rounded-lg border-2 border-gray-200"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(index)}
                                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Upload Button */}
                                <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${errors.images ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400 bg-gray-50'
                                    }`}>
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        {uploading ? (
                                            <>
                                                <div className="w-8 h-8 border-2 border-gray-600 border-t-transparent rounded-full animate-spin mb-2"></div>
                                                <p className="text-sm text-gray-500">Uploading...</p>
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <p className="text-sm text-gray-600">Click to upload image</p>
                                                <p className="text-xs text-gray-500">JPG, PNG, WebP, HEIC (max 5MB)</p>
                                            </>
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/jpeg,image/png,image/webp,image/heic,image/heif,.heic,.heif"
                                        onChange={handleImageUpload}
                                        disabled={uploading}
                                    />
                                </label>
                                {errors.images && <p className="text-red-500 text-sm mt-2">{errors.images}</p>}
                            </div>

                            {/* Submit Buttons */}
                            <div className="flex gap-4 pt-4 border-t border-gray-200">
                                <button
                                    type="submit"
                                    disabled={saving || uploading}
                                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {saving ? 'Saving...' : editingProduct ? 'Update Product' : 'Add Product'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

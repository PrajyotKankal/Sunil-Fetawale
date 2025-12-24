'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// Convert Cloudinary URL to always return JPG format (fixes HEIC display)
function getDisplayUrl(url) {
    if (!url) return url
    // Replace file extension with .jpg and add format transformation
    // Cloudinary URL format: https://res.cloudinary.com/xxx/image/upload/v123/folder/file.heic
    // We want: https://res.cloudinary.com/xxx/image/upload/f_auto,q_auto/v123/folder/file.jpg
    return url
        .replace(/\.(heic|heif)$/i, '.jpg')
        .replace('/upload/', '/upload/f_auto,q_auto/')
}
export default function GalleryPage() {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedImageIndex, setSelectedImageIndex] = useState(null)

    // Fetch images from API
    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch('/api/gallery')
                const data = await res.json()
                setImages(Array.isArray(data) ? data : [])
            } catch (error) {
                console.error('Failed to fetch gallery:', error)
                setImages([])
            } finally {
                setLoading(false)
            }
        }
        fetchImages()
    }, [])

    // Handle keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return
            if (e.key === 'Escape') setSelectedImageIndex(null)
            if (e.key === 'ArrowRight') nextImage()
            if (e.key === 'ArrowLeft') prevImage()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImageIndex, images.length])

    const nextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="min-h-screen bg-ivory-50">
            {/* Header Section */}
            <section className="bg-warm-50/50 border-b border-warm-200/30 pt-12 pb-16">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center text-sm text-warm-600 hover:text-maroon-600 transition-colors mb-6 uppercase tracking-widest font-medium"
                        >
                            <span className="mr-2">←</span> Back to Home
                        </Link>
                        <h1 className="font-display text-5xl md:text-6xl text-warm-800 mb-4">
                            The Lookbook
                        </h1>
                        <p className="text-lg text-warm-600 max-w-2xl mx-auto font-light">
                            A curated collection of our finest traditional craftsmanship.
                            <span className="hidden md:inline"> Explore the details of our hand-made feta, dupattas, and accessories.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 md:py-16">
                <div className="container-custom">
                    {loading ? (
                        /* Loading Skeleton - use fixed heights to avoid hydration mismatch */
                        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                            {[280, 320, 260, 340, 290, 310, 270, 330].map((height, i) => (
                                <div key={i} className="break-inside-avoid">
                                    <div className="bg-warm-200/50 rounded-lg animate-pulse" style={{ height: `${height}px` }} />
                                </div>
                            ))}
                        </div>
                    ) : images.length === 0 ? (
                        /* Empty State */
                        <div className="text-center py-16">
                            <svg className="w-16 h-16 text-warm-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-warm-600 text-lg">Gallery coming soon...</p>
                            <p className="text-warm-500 text-sm mt-2">Our collection is being curated</p>
                        </div>
                    ) : (
                        /* Masonry Grid */
                        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                            {images.map((image, index) => (
                                <motion.div
                                    key={image._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index % 4 * 0.1 }}
                                    className="break-inside-avoid"
                                >
                                    <div
                                        className="group relative rounded-lg overflow-hidden cursor-zoom-in bg-white shadow-sm hover:shadow-xl transition-all duration-500"
                                        onClick={() => setSelectedImageIndex(index)}
                                    >
                                        <div className="relative">
                                            <Image
                                                src={getDisplayUrl(image.url)}
                                                alt={image.caption || 'Sunil Fetawale Gallery'}
                                                width={500}
                                                height={500}
                                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                            />

                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                                            {/* View Icon */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-warm-800 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Featured Badge */}
                                            {image.featured && (
                                                <div className="absolute top-2 left-2 bg-maroon-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                                                    Featured
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Immersive Lightbox */}
            <AnimatePresence>
                {selectedImageIndex !== null && images[selectedImageIndex] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-[110]"
                            onClick={() => setSelectedImageIndex(null)}
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation Buttons (Desktop) */}
                        <button
                            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 hidden md:block z-[110]"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 hidden md:block z-[110]"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Main Image Container */}
                        <div
                            className="relative w-full h-full max-w-5xl max-h-[90vh] p-4 flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                key={selectedImageIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="relative w-full h-full flex items-center justify-center"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={getDisplayUrl(images[selectedImageIndex].url)}
                                        alt={images[selectedImageIndex].caption || 'Detailed view'}
                                        fill
                                        className="object-contain"
                                        sizes="100vw"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            {/* Mobile Tap Navigation Areas */}
                            <div className="absolute inset-y-0 left-0 w-1/4 md:hidden z-[105]" onClick={(e) => { e.stopPropagation(); prevImage(); }} />
                            <div className="absolute inset-y-0 right-0 w-1/4 md:hidden z-[105]" onClick={(e) => { e.stopPropagation(); nextImage(); }} />

                            {/* Caption & Counter */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                                {images[selectedImageIndex].caption && (
                                    <p className="text-white/90 text-sm mb-2 max-w-md">{images[selectedImageIndex].caption}</p>
                                )}
                                <p className="text-white/70 font-mono text-sm tracking-widest">
                                    {selectedImageIndex + 1} / {images.length}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

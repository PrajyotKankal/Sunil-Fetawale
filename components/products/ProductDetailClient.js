'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useCart } from '@/context/CartContext'

// Recently viewed products storage key
const RECENTLY_VIEWED_KEY = 'recentlyViewedProducts'
const MAX_RECENTLY_VIEWED = 6

export default function ProductDetailClient({ initialProduct }) {
    const [product, setProduct] = useState(initialProduct)
    const [loading, setLoading] = useState(!initialProduct)
    const [error, setError] = useState(null)
    const [selectedImage, setSelectedImage] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)
    const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 })
    const [relatedProducts, setRelatedProducts] = useState([])
    const [recentlyViewed, setRecentlyViewed] = useState([])
    const [copied, setCopied] = useState(false)
    const [descriptionExpanded, setDescriptionExpanded] = useState(false)
    const { addToCart, cart, setIsOpen } = useCart()

    const isInCart = cart.some(item => item._id === product?._id)

    useEffect(() => {
        if (product) {
            // Track product view
            if (product._id) {
                fetch(`/api/products/${product._id}/view`, { method: 'POST' }).catch(() => { })
            }

            // Fetch related products
            if (product.category) {
                fetchRelatedProducts(product.category, product._id)
            }

            // Add to recently viewed
            addToRecentlyViewed(product)

            // Load recently viewed list
            loadRecentlyViewed()
        }
    }, [product?._id]) // Depend on product ID change

    async function fetchRelatedProducts(category, currentId) {
        try {
            const res = await fetch(`/api/products?category=${category}`)
            if (res.ok) {
                const data = await res.json()
                const filtered = data.filter(p => p._id !== currentId).slice(0, 4)
                setRelatedProducts(filtered)
            }
        } catch (err) {
            console.error('Failed to fetch related products:', err)
        }
    }

    function loadRecentlyViewed() {
        try {
            const stored = localStorage.getItem(RECENTLY_VIEWED_KEY)
            if (stored) {
                const items = JSON.parse(stored)
                // Filter out current product to avoid duplication in list if we wanted to
                // But for "Recently Viewed" section, usually we just show the list excluding current if desired
                // Let's filter out current product from the VIEW
                const filtered = items.filter(p => p.slug !== product.slug)
                setRecentlyViewed(filtered.slice(0, 4))
            }
        } catch (err) {
            console.error('Error loading recently viewed:', err)
        }
    }

    function addToRecentlyViewed(productData) {
        try {
            const stored = localStorage.getItem(RECENTLY_VIEWED_KEY)
            let items = stored ? JSON.parse(stored) : []

            // Remove if already exists
            items = items.filter(p => p._id !== productData._id)

            // Add to beginning
            items.unshift({
                _id: productData._id,
                title: productData.title,
                code: productData.code,
                slug: productData.slug,
                image: productData.images?.[0]?.url || null
            })

            // Keep only max items
            items = items.slice(0, MAX_RECENTLY_VIEWED)

            localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(items))
        } catch (err) {
            console.error('Error saving recently viewed:', err)
        }
    }

    // Share functions
    function copyLink() {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    function shareWhatsApp() {
        const text = `Check out this ${product.title} - ${window.location.href}`
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
    }

    // Zoom handlers
    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setZoomPosition({ x, y })
    }

    if (!product) return null

    const categoryNames = {
        'bridal': 'Bridal Ghunghat',
        'groom': 'Groom Shawls',
        'baraat': 'Baraat Accessories',
    }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    const images = product.images || []
    const currentImage = images[selectedImage]?.url || null

    return (
        <div className="bg-ivory-50 min-h-screen">
            {/* Breadcrumb */}
            <div className="bg-warm-50 border-b border-warm-200/50 py-4">
                <div className="container-custom">
                    <nav className="flex items-center space-x-2 text-sm text-warm-600">
                        <Link href="/" className="hover:text-warm-700 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-warm-700 transition-colors">Products</Link>
                        <span>/</span>
                        <span className="text-warm-700 truncate max-w-[180px] inline-block">{product.title}</span>
                    </nav>
                </div>
            </div>

            {/* Product Content */}
            <section className="py-12 md:py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Left: Product Images with Gallery */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >
                            {/* Mobile Swipeable Gallery */}
                            <div className="md:hidden relative mb-6 group">
                                <div
                                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide aspect-square rounded-lg bg-ivory-100"
                                    onScroll={(e) => {
                                        const width = e.currentTarget.offsetWidth;
                                        const index = Math.round(e.currentTarget.scrollLeft / width);
                                        if (index !== selectedImage && index < images.length) {
                                            setSelectedImage(index);
                                        }
                                    }}
                                >
                                    {images.map((img, index) => (
                                        <div key={index} className="flex-none w-full h-full snap-center relative">
                                            <Image
                                                src={img.url}
                                                alt={`${product.title} ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile Dots Indicator */}
                                {images.length > 1 && (
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                                        {images.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === selectedImage
                                                    ? 'bg-maroon-600 scale-110'
                                                    : 'bg-warm-300/80 backdrop-blur-sm'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                )}

                                {/* Product Code Badge (Mobile) */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="inline-block px-3 py-1 bg-gold-100/95 backdrop-blur-sm text-gold-700 rounded-md text-xs font-mono font-medium">
                                        {product.code}
                                    </span>
                                </div>
                            </div>

                            {/* Desktop Gallery (Click to Select + Zoom) */}
                            <div className="hidden md:block">
                                {/* Main Image with Zoom */}
                                <div
                                    className="aspect-square bg-ivory-100 rounded-lg overflow-hidden relative cursor-zoom-in"
                                    onMouseEnter={() => setIsZoomed(true)}
                                    onMouseLeave={() => setIsZoomed(false)}
                                    onMouseMove={handleMouseMove}
                                >
                                    {currentImage ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={currentImage}
                                                alt={product.title}
                                                fill
                                                className={`object-cover transition-transform duration-200 ${isZoomed ? 'scale-150' : 'scale-100'}`}
                                                style={isZoomed ? { transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` } : {}}
                                                priority
                                            />
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="font-display text-9xl text-warm-200 opacity-50">
                                                {product.code.split('-')[0]}
                                            </span>
                                        </div>
                                    )}

                                    {/* Product Code Badge */}
                                    <div className="absolute top-6 left-6 z-10">
                                        <span className="inline-block px-4 py-2 bg-gold-100/95 backdrop-blur-sm text-gold-700 rounded-md text-sm font-mono font-medium">
                                            {product.code}
                                        </span>
                                    </div>

                                    {/* Zoom Hint */}
                                    {currentImage && !isZoomed && (
                                        <div className="absolute bottom-4 right-4 z-10">
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-black/50 text-white text-xs rounded">
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                                Hover to zoom
                                            </span>
                                        </div>
                                    )}

                                    {/* Watermark Overlay */}
                                    {currentImage && (
                                        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center overflow-hidden">
                                            <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-16 rotate-[-30deg] scale-150 opacity-[0.08]">
                                                {[...Array(12)].map((_, i) => (
                                                    <span key={i} className="text-2xl md:text-3xl font-bold text-warm-900 whitespace-nowrap select-none">
                                                        Sunil Phetawale
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Thumbnail Gallery */}
                                {images.length > 1 && (
                                    <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                                        {images.map((img, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedImage(index)}
                                                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${selectedImage === index
                                                    ? 'border-maroon-600 ring-2 ring-maroon-600 ring-offset-2'
                                                    : 'border-warm-200 hover:border-warm-400'
                                                    }`}
                                            >
                                                <Image
                                                    src={img.url}
                                                    alt={`${product.title} ${index + 1}`}
                                                    fill
                                                    sizes="80px"
                                                    className="object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Share Buttons */}
                            <div className="mt-6 pt-6 border-t border-warm-200/50">
                                <p className="text-sm text-warm-600 mb-3">Share this product</p>
                                <div className="flex gap-2">
                                    <button
                                        onClick={async () => {
                                            if (navigator.share) {
                                                try {
                                                    await navigator.share({
                                                        title: product.title,
                                                        text: `Check out ${product.title} from Sunil Fetawale`,
                                                        url: window.location.href,
                                                    })
                                                } catch (err) {
                                                    console.log('Error sharing:', err)
                                                }
                                            } else {
                                                copyLink()
                                            }
                                        }}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-warm-100 text-warm-900 rounded-lg text-sm font-medium hover:bg-warm-200 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                        Share
                                    </button>

                                    <button
                                        onClick={shareWhatsApp}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        WhatsApp
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Product Details */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                            className="flex flex-col"
                        >
                            {/* Category Label */}
                            <motion.div variants={fadeIn}>
                                <Link
                                    href={`/products?category=${product.category}`}
                                    className="inline-block text-sm text-warm-600 uppercase tracking-wider hover:text-maroon-600 transition-colors mb-4"
                                >
                                    {categoryNames[product.category] || product.category}
                                </Link>
                            </motion.div>

                            {/* Product Title */}
                            <motion.h1
                                variants={fadeIn}
                                className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 mb-4 leading-tight"
                            >
                                {product.title}
                            </motion.h1>

                            {/* Product Code */}
                            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
                                <span className="font-mono text-lg text-warm-500">
                                    Code: <span className="text-warm-900 font-medium">{product.code}</span>
                                </span>
                            </motion.div>

                            {/* Divider with ornamental symbol */}
                            <motion.div variants={fadeIn} className="relative py-4 mb-8 overflow-hidden">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-warm-200"></div>
                                </div>
                                <div className="relative flex justify-center">
                                    <span className="bg-ivory-50 px-3 text-warm-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L9 9l-7 3 7 3 3 7 3-7 7-3-7-3-3-7z" /></svg>
                                    </span>
                                </div>
                            </motion.div>

                            {/* Product Details Accordion */}
                            <motion.div variants={fadeIn} className="space-y-4 mb-10">
                                {/* Description */}
                                <div className="mb-6">
                                    <h3 className="font-serif text-lg text-warm-900 mb-3">Description</h3>
                                    <p className="text-warm-700 leading-relaxed">
                                        {product.description}
                                    </p>
                                    <p className="text-warm-700 leading-relaxed mt-4">
                                        Handcrafted with precision, this piece combines traditional elegance with modern comfort. Perfect for weddings, festivals, and special occasions.
                                    </p>
                                </div>

                                <DetailsAccordion title="Product Details">
                                    <ul className="space-y-2 text-sm text-warm-700">
                                        <li className="flex justify-between border-b border-warm-100 pb-2">
                                            <span>Material</span>
                                            <span className="font-medium">Premium Wedding Silk/Cotton</span>
                                        </li>
                                        <li className="flex justify-between border-b border-warm-100 pb-2">
                                            <span>Craft</span>
                                            <span className="font-medium">Hand Embroidered / Stitched</span>
                                        </li>
                                        <li className="flex justify-between border-b border-warm-100 pb-2">
                                            <span>Origin</span>
                                            <span className="font-medium">Maharashtra, India</span>
                                        </li>
                                        <li className="flex justify-between pt-1">
                                            <span>Care</span>
                                            <span className="font-medium">Dry Clean Only</span>
                                        </li>
                                    </ul>
                                </DetailsAccordion>

                                {/* Divider */}
                                <motion.div variants={fadeIn}>
                                    <hr className="border-warm-200/50 mb-10" />
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div variants={fadeIn} className="space-y-4">
                                    {/* Primary: Add to Inquiry Cart */}
                                    {/* Primary: Add to Inquiry Cart */}
                                    <button
                                        onClick={() => {
                                            addToCart(product)
                                            // Optional: trigger a small confetti or toast here in future
                                        }}
                                        disabled={isInCart}
                                        className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 transform active:scale-95 ${isInCart
                                            ? 'bg-green-100 text-green-700 border border-green-200 cursor-default'
                                            : 'bg-maroon-600 text-white hover:bg-maroon-700 shadow-xl shadow-maroon-200 hover:-translate-y-1'
                                            }`}
                                    >
                                        <svg className={`w-5 h-5 transition-transform duration-500 ${isInCart ? 'rotate-[-360deg]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            {isInCart ? (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            ) : (
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            )}
                                        </svg>
                                        <span>{isInCart ? 'Added to Shortlist' : 'Add to Inquiry Cart'}</span>
                                    </button>

                                    {cart.length > 0 && (
                                        <button
                                            onClick={() => setIsOpen(true)}
                                            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-warm-100 text-warm-800 rounded-lg font-medium text-base hover:bg-warm-200 transition-colors"
                                        >
                                            <span>View Inquiry ({cart.length})</span>
                                        </button>
                                    )}

                                    {/* Secondary: Back to Products */}
                                    <Link
                                        href="/products"
                                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent text-warm-700 border border-warm-300 rounded-lg font-medium text-base hover:bg-warm-50 hover:border-warm-400 transition-all"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        <span>Back to Products</span>
                                    </Link>
                                </motion.div>

                                {/* Additional Info */}
                                <DetailsAccordion title="Shipping & Returns">
                                    <div className="text-sm text-warm-700 space-y-2">
                                        <p><strong>Shipping:</strong> Dispatched within 24-48 hours. Delivery takes 3-5 business days across India.</p>
                                        <p><strong>International:</strong> Available for international shipping (7-10 days).</p>
                                        <p><strong>Returns:</strong> Easy returns within 7 days of delivery for damaged products.</p>
                                    </div>
                                </DetailsAccordion>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <section className="py-12 bg-warm-50/50 border-t border-warm-200/50">
                    <div className="container-custom">
                        <h2 className="font-serif text-2xl text-warm-800 mb-8">You May Also Like</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {relatedProducts.map((item) => (
                                <Link
                                    key={item._id}
                                    href={`/products/${item.slug}`}
                                    className="group"
                                >
                                    <div className="relative aspect-square bg-ivory-100 rounded-lg overflow-hidden border border-warm-200/50 group-hover:border-maroon-300 transition-colors">
                                        {item.images?.[0]?.url ? (
                                            <Image
                                                src={item.images[0].url}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-2xl text-warm-300">{item.code}</span>
                                            </div>
                                        )}
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-1 bg-gold-100/95 text-gold-700 rounded text-xs font-mono">
                                                {item.code}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-sm font-medium text-warm-800 line-clamp-1 group-hover:text-maroon-600 transition-colors">{item.title}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Recently Viewed Section */}
            {recentlyViewed.length > 0 && (
                <section className="py-12 border-t border-warm-200/50">
                    <div className="container-custom">
                        <h2 className="font-serif text-2xl text-warm-800 mb-8">Recently Viewed</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {recentlyViewed.map((item) => (
                                <Link
                                    key={item._id}
                                    href={`/products/${item.slug}`}
                                    className="group"
                                >
                                    <div className="relative aspect-square bg-ivory-100 rounded-lg overflow-hidden border border-warm-200/50 group-hover:border-maroon-300 transition-colors">
                                        {item.image ? (
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-2xl text-warm-300">{item.code}</span>
                                            </div>
                                        )}
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-1 bg-gold-100/95 text-gold-700 rounded text-xs font-mono">
                                                {item.code}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-sm font-medium text-warm-800 line-clamp-1 group-hover:text-maroon-600 transition-colors">{item.title}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            {/* Mobile Sticky Bottom Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-warm-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden z-40 safe-area-bottom">
                <div className="flex gap-3">
                    <Link
                        href="/"
                        className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-warm-50 rounded-lg border border-warm-200 text-warm-600"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </Link>
                    <button
                        onClick={() => addToCart(product)}
                        disabled={isInCart}
                        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-bold text-base transition-all ${isInCart
                            ? 'bg-green-600 text-white'
                            : 'bg-maroon-600 text-white shadow-lg'
                            }`}
                    >
                        <span>{isInCart ? 'Added to Cart' : 'Add to Inquiry'}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

function DetailsAccordion({ title, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div className="border-b border-warm-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-4 text-left group"
            >
                <span className="font-serif text-lg text-warm-900 group-hover:text-maroon-700 transition-colors">
                    {title}
                </span>
                <span className={`transform transition-transform duration-300 text-warm-400 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <div className="pb-6 text-warm-600">
                    {children}
                </div>
            </motion.div>
        </div>
    )
}

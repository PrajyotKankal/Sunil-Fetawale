'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductCard({ product, index = 0 }) {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    }

    // Use slug for URL, fallback to _id
    const productSlug = product.slug || product._id

    // Get first image URL from images array
    const imageUrl = product.images?.[0]?.url || null

    // Use title (new schema) or name (legacy fallback)
    const productTitle = product.title || product.name

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            <div className="group h-full bg-white border border-warm-200/80 rounded-lg overflow-hidden transition-all duration-400 hover:border-warm-300">
                {/* Clickable Image Area */}
                <Link href={`/products/${productSlug}`}>
                    <div className="relative aspect-square bg-ivory-100 overflow-hidden cursor-pointer">
                        {imageUrl ? (
                            <Image
                                src={imageUrl}
                                alt={productTitle}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-display text-6xl text-warm-200">
                                    {product.code?.split('-')[0] || 'P'}
                                </span>
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/5 to-transparent" />

                        <div className="absolute top-4 left-4">
                            <span className="inline-block px-2.5 py-1 bg-warm-100/80 backdrop-blur-sm text-warm-600 rounded text-xs font-mono">
                                {product.code}
                            </span>
                        </div>

                        <div className="absolute inset-0 bg-maroon-600/0 group-hover:bg-maroon-600/5 transition-all duration-400" />
                    </div>
                </Link>

                {/* Product Details */}
                <div className="p-5">
                    <Link href={`/products/${productSlug}`}>
                        <h3 className="font-serif text-xl text-warm-800 mb-2 line-clamp-2 min-h-[3.5rem] hover:text-maroon-600 transition-colors cursor-pointer">
                            {productTitle}
                        </h3>
                    </Link>

                    <p className="text-sm text-warm-500 leading-relaxed mb-4 line-clamp-1">
                        {product.description}
                    </p>

                    {/* Request Quote Button */}
                    <a
                        href={`https://wa.me/917020708747?text=Hi, I'm interested in ${encodeURIComponent(product.code)} - ${encodeURIComponent(productTitle)}%0A%0AView product: ${typeof window !== 'undefined' ? window.location.origin : ''}/products/${productSlug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-warm-700 border border-warm-200 rounded hover:bg-warm-50 hover:border-warm-300 hover:text-maroon-600 transition-all duration-300"
                    >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Request Quote
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

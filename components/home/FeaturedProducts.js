'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProductCard from '@/components/products/ProductCard'

export default function FeaturedProducts() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchFeatured() {
            try {
                const res = await fetch('/api/products?featured=true')
                if (res.ok) {
                    const data = await res.json()
                    setProducts(data.slice(0, 6))
                }
            } catch (error) {
                console.error('Failed to fetch featured products:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchFeatured()
    }, [])

    // Don't render section if no products
    if (loading) {
        return (
            <section className="bg-ivory-50 section-spacing">
                <div className="container-custom text-center py-12">
                    <div className="inline-block w-8 h-8 border-4 border-maroon-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </section>
        )
    }

    if (products.length === 0) {
        return null // Hide section if no featured products
    }

    return (
        <section className="bg-ivory-50 section-spacing">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <p className="text-sm md:text-base text-warm-600 tracking-wider uppercase font-medium mb-4">
                        Handpicked for You
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-warm-800 mb-4">
                        Seasonal Selections
                    </h2>
                    <p className="text-lg text-warm-600 max-w-2xl mx-auto">
                        Our curated picks for the wedding season
                    </p>
                </motion.div>

                {/* Products Grid */}
                {/* Products Grid / Carousel */}
                <div className="
                    flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide
                    sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:pb-0 sm:mx-0 sm:px-0 sm:overflow-visible
                ">
                    {products.map((product, index) => (
                        <div
                            key={product._id}
                            className="flex-none w-[85vw] sm:w-auto snap-center mr-4 sm:mr-0 last:mr-0"
                        >
                            <ProductCard
                                product={product}
                                index={index}
                            />
                        </div>
                    ))}
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mt-12 md:mt-16"
                >
                    <Link
                        href="/products"
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-maroon-600 border border-maroon-300 rounded-lg font-medium hover:bg-maroon-50 hover:border-maroon-400 transition-all duration-350"
                    >
                        <span>View All Products</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

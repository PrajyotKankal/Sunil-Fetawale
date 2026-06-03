'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ProductCard from '@/components/products/ProductCard'

export default function FeaturedProducts() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState('all')

    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        try {
            const res = await fetch('/api/products')
            if (res.ok) {
                const data = await res.json()
                setProducts(Array.isArray(data) ? data : [])
            }
        } catch (error) {
            console.error('Failed to fetch products:', error)
        } finally {
            setLoading(false)
        }
    }

    const tabs = ['all', 'bridal', 'groom', 'baraat', 'shela', 'shawl', 'samman']

    const tabLabels = {
        all: 'All Products',
        bridal: 'Bridal Ghunghat',
        groom: 'Groom Pheta',
        baraat: 'Baraat',
        shela: 'Shela',
        shawl: 'Shawl',
        samman: 'Samman',
    }

    const filtered = activeTab === 'all'
        ? products.slice(0, 8)
        : products.filter(p => p.category === activeTab).slice(0, 8)

    return (
        <section className="section-spacing" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="container-custom">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="flex items-center justify-center gap-4 mb-5">
                        <span className="h-px w-10" style={{ background: 'rgba(212,175,55,0.5)' }} />
                        <span
                            className="font-sans font-medium uppercase"
                            style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#A6861F' }}
                        >
                            Our Products
                        </span>
                        <span className="h-px w-10" style={{ background: 'rgba(212,175,55,0.5)' }} />
                    </div>

                    <h2
                        className="font-serif mb-3 leading-tight"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#2D1C1C', letterSpacing: '-0.015em' }}
                    >
                        Handcrafted for Your{' '}
                        <em className="not-italic" style={{ color: '#8B2635' }}>Wedding Day</em>
                    </h2>

                    <p
                        className="font-sans max-w-xl mx-auto"
                        style={{ color: 'rgba(87,65,55,0.65)', fontSize: '1rem', lineHeight: '1.7' }}
                    >
                        Every piece is made to order — from bridal ghunghat to groom pheta. Browse our collection and order directly via WhatsApp.
                    </p>
                </motion.div>

                {/* Category Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-center justify-center gap-2 mb-10 flex-wrap"
                >
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className="font-sans font-medium capitalize transition-all duration-300"
                            style={{
                                padding: '8px 22px',
                                borderRadius: '50px',
                                fontSize: '13px',
                                letterSpacing: '0.03em',
                                border: activeTab === tab
                                    ? '1.5px solid #8B2635'
                                    : '1.5px solid rgba(87,65,55,0.15)',
                                backgroundColor: activeTab === tab ? '#8B2635' : 'transparent',
                                color: activeTab === tab ? '#FFFFFF' : 'rgba(87,65,55,0.65)',
                            }}
                        >
                            {tabLabels[tab]}
                        </button>
                    ))}
                </motion.div>

                {/* Loading State */}
                {loading && (
                    <div className="text-center py-16">
                        <div
                            className="inline-block w-10 h-10 rounded-full border-4 border-t-transparent animate-spin"
                            style={{ borderColor: 'rgba(139,38,53,0.2)', borderTopColor: '#8B2635' }}
                        />
                        <p className="font-sans mt-4" style={{ color: 'rgba(87,65,55,0.5)', fontSize: '14px' }}>
                            Loading products...
                        </p>
                    </div>
                )}

                {/* Empty state */}
                {!loading && products.length === 0 && (
                    <div
                        className="text-center py-20 rounded-2xl"
                        style={{ background: '#FAF8F5', border: '1.5px dashed rgba(212,175,55,0.3)' }}
                    >
                        <div
                            className="inline-flex items-center justify-center rounded-2xl mb-4"
                            style={{ width: 64, height: 64, backgroundColor: 'rgba(139,38,53,0.07)' }}
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#8B2635" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <h3 className="font-serif mb-2" style={{ fontSize: '1.4rem', color: '#2D1C1C' }}>
                            No products yet
                        </h3>
                        <p className="font-sans mb-6" style={{ color: 'rgba(87,65,55,0.55)', fontSize: '14px' }}>
                            Add your first product from the admin panel.
                        </p>
                        <Link
                            href="/admin/products"
                            className="font-sans font-semibold text-sm"
                            style={{
                                padding: '10px 24px',
                                backgroundColor: '#8B2635',
                                color: '#FFFFFF',
                                borderRadius: '10px',
                                textDecoration: 'none',
                            }}
                        >
                            Go to Admin →
                        </Link>
                    </div>
                )}

                {/* Products Grid */}
                {!loading && filtered.length > 0 && (
                    <>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {filtered.map((product, index) => (
                                <motion.div
                                    key={product._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-30px' }}
                                    transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3) }}
                                >
                                    <ProductCard product={product} index={index} />
                                </motion.div>
                            ))}
                        </div>

                        {/* No results for filter */}
                        {filtered.length === 0 && products.length > 0 && (
                            <div className="text-center py-12">
                                <p className="font-sans" style={{ color: 'rgba(87,65,55,0.5)' }}>
                                    No {activeTab} products yet.
                                </p>
                            </div>
                        )}
                    </>
                )}

                {/* View All CTA */}
                {!loading && (
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mt-12"
                    >
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-3 font-sans font-semibold transition-all duration-300 group"
                            style={{
                                padding: '14px 36px',
                                backgroundColor: '#8B2635',
                                color: '#FFFFFF',
                                borderRadius: '12px',
                                fontSize: '15px',
                                letterSpacing: '0.01em',
                                textDecoration: 'none',
                                boxShadow: '0 4px 20px rgba(139,38,53,0.25)',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#7A1F2D'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(139,38,53,0.3)'; }}
                            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#8B2635'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(139,38,53,0.25)'; }}
                        >
                            <span>View Full Collection</span>
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <p className="font-sans mt-3" style={{ fontSize: '12px', color: 'rgba(87,65,55,0.4)', letterSpacing: '0.05em' }}>
                            All products custom made · Pan-India delivery
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const categories = [
    {
        id: 'bridal-ghunghat',
        name: 'Bridal Ghunghat',
        nameHi: 'दुल्हन घूंघट',
        description: 'Exquisite ghunghats adorned with traditional embroidery — handcrafted for your most sacred day.',
        href: '/products?category=bridal',
        image: '/images/categories/bridal-ghunghat.png',
        tag: 'Most Popular',
    },
    {
        id: 'groom-shawls',
        name: 'Groom Pheta',
        nameHi: 'दूल्हे का फेटा',
        description: 'Premium custom pheta made to your exact head measurement and ceremonial style.',
        href: '/products?category=groom',
        image: '/images/categories/groom-shawls.png',
        tag: 'Custom Made',
    },
    {
        id: 'baraat-accessories',
        name: 'Baraat Accessories',
        nameHi: 'बारात एक्सेसरीज़',
        description: 'Complete range of accessories for baraat members, procession, and the entire wedding party.',
        href: '/products?category=baraat',
        image: '/images/categories/baraat-accessories.png',
        tag: 'Full Sets',
    },
    {
        id: 'shela',
        name: 'Shela',
        nameHi: 'शेला',
        description: 'Traditional Maharashtrian shela — worn at ceremonies and auspicious occasions with grace.',
        href: '/products?category=shela',
        image: '/images/categories/bridal-ghunghat.png',
        tag: 'Traditional',
    },
    {
        id: 'shawl',
        name: 'Shawl',
        nameHi: 'शॉल',
        description: 'Premium quality shawls for groom, family members, and wedding guests — elegant and warm.',
        href: '/products?category=shawl',
        image: '/images/categories/groom-shawls.png',
        tag: 'Premium',
    },
    {
        id: 'samman',
        name: 'Samman',
        nameHi: 'सम्मान',
        description: 'Honor and felicitation accessories — perfect for guest felicitation and ceremonial respect.',
        href: '/products?category=samman',
        image: '/images/categories/baraat-accessories.png',
        tag: 'Felicitation',
    },
]

export default function FeaturedCategories() {
    return (
        <section style={{ backgroundColor: '#FAF8F5' }} className="section-spacing overflow-hidden">
            <div className="container-custom">

                {/* Section Header */}
                <div className="text-center mb-14 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-4 mb-5"
                    >
                        <span className="h-px w-10" style={{ background: 'rgba(212,175,55,0.5)' }} />
                        <span
                            className="font-sans font-medium uppercase"
                            style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#A6861F' }}
                        >
                            Our Collections
                        </span>
                        <span className="h-px w-10" style={{ background: 'rgba(212,175,55,0.5)' }} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-800 mb-4 leading-tight"
                        style={{ color: '#2D1C1C', letterSpacing: '-0.015em' }}
                    >
                        Made for Every <em className="not-italic" style={{ color: '#8B2635' }}>Moment</em>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.18 }}
                        className="text-lg max-w-xl mx-auto"
                        style={{ color: 'rgba(87,65,55,0.65)' }}
                    >
                        Handcrafted wedding accessories made to your exact measurements — from bridal ghunghat to groom pheta and full baraat sets.
                    </motion.p>
                </div>

                {/* Category grid — 2 cols mobile, 3 cols desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link href={cat.href} className="group block h-full" style={{ textDecoration: 'none' }}>
                                <div
                                    className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1.5"
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        boxShadow: '0 2px 20px rgba(87,65,55,0.07), 0 1px 4px rgba(87,65,55,0.05)',
                                        border: '1px solid rgba(212,175,55,0.15)',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.boxShadow = '0 8px 36px rgba(87,65,55,0.13), 0 2px 8px rgba(87,65,55,0.07)'
                                        e.currentTarget.style.borderColor = 'rgba(212,175,55,0.35)'
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.boxShadow = '0 2px 20px rgba(87,65,55,0.07), 0 1px 4px rgba(87,65,55,0.05)'
                                        e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)'
                                    }}
                                >
                                    {/* Image */}
                                    <div
                                        className="relative overflow-hidden"
                                        style={{ aspectRatio: '4/3' }}
                                    >
                                        <Image
                                            src={cat.image}
                                            alt={cat.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Subtle gradient overlay */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: 'linear-gradient(to top, rgba(30,12,12,0.55) 0%, rgba(30,12,12,0.15) 45%, transparent 100%)',
                                            }}
                                        />

                                        {/* Tag badge */}
                                        <div className="absolute top-3.5 left-3.5">
                                            <span
                                                className="font-sans font-semibold rounded-full"
                                                style={{
                                                    fontSize: '9.5px',
                                                    letterSpacing: '0.1em',
                                                    padding: '4px 11px',
                                                    backgroundColor: 'rgba(250,248,245,0.92)',
                                                    color: '#8B2635',
                                                    textTransform: 'uppercase',
                                                    backdropFilter: 'blur(8px)',
                                                }}
                                            >
                                                {cat.tag}
                                            </span>
                                        </div>

                                        {/* Name overlay on image */}
                                        <div className="absolute bottom-0 left-0 right-0 p-5">
                                            <p
                                                className="font-sans text-white/60 mb-0.5"
                                                style={{ fontSize: '11px', letterSpacing: '0.06em' }}
                                            >
                                                {cat.nameHi}
                                            </p>
                                            <h3 className="font-display text-white text-2xl leading-tight">
                                                {cat.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Card body */}
                                    <div className="p-5 md:p-6">
                                        <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: 'rgba(87,65,55,0.65)' }}>
                                            {cat.description}
                                        </p>
                                        <div
                                            className="inline-flex items-center gap-2 font-sans font-semibold text-sm transition-all duration-300"
                                            style={{ color: '#8B2635' }}
                                        >
                                            <span>Explore Collection</span>
                                            <svg
                                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-12 md:mt-16"
                >
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-3 font-sans font-semibold text-sm transition-all duration-300 group"
                        style={{
                            padding: '13px 30px',
                            border: '1.5px solid rgba(139,38,53,0.25)',
                            color: '#7A1F2D',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            backgroundColor: 'transparent',
                            letterSpacing: '0.01em',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(139,38,53,0.05)'; e.currentTarget.style.borderColor = 'rgba(139,38,53,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(139,38,53,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        <span>View All Products</span>
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

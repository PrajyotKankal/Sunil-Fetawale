'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FeaturedCategories() {
    const categories = [
        {
            id: 'bridal-ghunghat',
            name: 'Bridal Ghunghat',
            description: 'Exquisite ghunghats adorned with traditional embroidery and embellishments for the bride.',
            href: '/products?category=bridal-ghunghat',
            image: '/images/categories/bridal-ghunghat.png',
        },
        {
            id: 'groom-shawls',
            name: 'Groom Shawls',
            description: 'Premium shawls featuring rich fabrics and elegant designs for the groom and family.',
            href: '/products?category=groom-shawls',
            image: '/images/categories/groom-shawls.png',
        },
        {
            id: 'baraat-accessories',
            name: 'Baraat Accessories',
            description: 'Complete range of accessories for baraat members and wedding procession participants.',
            href: '/products?category=baraat-accessories',
            image: '/images/categories/baraat-accessories.png',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    }

    return (
        <section className="bg-warm-50 section-spacing">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm md:text-base text-warm-700 tracking-wider uppercase font-medium mb-4"
                    >
                        Our Collections
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl text-warm-800 mb-4"
                    >
                        Explore by Category
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-warm-600 max-w-2xl mx-auto"
                    >
                        Discover our curated selection of traditional wedding accessories
                    </motion.p>
                </div>

                {/* Category Cards Grid - 2 columns on mobile */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
                >
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={cardVariants}
                        >
                            <Link
                                href={category.href}
                                className="group block h-full"
                            >
                                <div className="h-full bg-white border border-warm-200/80 rounded-lg overflow-hidden transition-all duration-400 hover:border-warm-300 hover:-translate-y-1">
                                    {/* Category Image - More compact on mobile */}
                                    <div className="relative aspect-square md:aspect-[4/3] bg-ivory-100 overflow-hidden">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-warm-900/70 via-warm-900/20 to-transparent" />
                                        {/* Category name overlay on mobile */}
                                        <div className="absolute bottom-0 left-0 right-0 p-3 md:hidden">
                                            <h3 className="font-serif text-lg text-white drop-shadow-lg">
                                                {category.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Content - Hidden on mobile, shown on tablet+ */}
                                    <div className="hidden md:block p-6 md:p-8">
                                        <h3 className="font-serif text-2xl text-warm-800 mb-3 group-hover:text-maroon-600 transition-colors duration-350">
                                            {category.name}
                                        </h3>
                                        <p className="text-warm-600 leading-relaxed mb-4">
                                            {category.description}
                                        </p>

                                        {/* View Link */}
                                        <div className="flex items-center text-maroon-600 font-medium text-sm">
                                            <span className="group-hover:mr-2 transition-all duration-350">
                                                Explore Collection
                                            </span>
                                            <svg
                                                className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-350"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

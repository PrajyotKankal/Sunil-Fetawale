'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
    // Animation variants - subtle and elegant
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    }

    return (
        <section className="relative bg-ivory-50 overflow-hidden">
            {/* Subtle background accent - optional decorative element */}
            <div className="absolute inset-0 bg-gradient-to-b from-ivory-100 to-ivory-50 opacity-50" />

            <div className="relative container-custom section-spacing">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Overline - small descriptor */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xs md:text-sm text-warm-700 tracking-wider uppercase font-medium mb-6"
                    >
                        Traditional Craftsmanship
                    </motion.p>

                    {/* Main Headline - Hero typography */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-display text-4xl md:text-6xl lg:text-7xl text-warm-800 mb-4 md:mb-6 tracking-tight leading-tight"
                    >
                        Wedding Wear <br className="hidden md:block" />
                        <span className="text-maroon-600">for Bride & Groom</span>
                    </motion.h1>

                    {/* Supporting text - refined single paragraph */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-xl text-warm-600 leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12"
                    >
                        Custom-made feta and dupatta crafted to match your head size, wedding attire, and ceremonial style — including complete bride–groom combinations designed with tradition and precision.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        {/* Primary CTA - WhatsApp */}
                        <a
                            href="https://wa.me/917020708747" // Update with actual number
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-6 py-3 md:px-8 md:py-4 bg-maroon-600 text-white rounded-lg font-medium text-sm md:text-base hover:bg-maroon-700 transition-colors duration-350 min-w-0 md:min-w-[200px] justify-center"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span>WhatsApp Inquiry</span>
                        </a>

                        {/* Secondary CTA - View Collection */}
                        <Link
                            href="/products"
                            className="inline-flex items-center space-x-2 px-6 py-3 md:px-8 md:py-4 bg-transparent text-maroon-600 border border-maroon-300 rounded-lg font-medium text-sm md:text-base hover:bg-maroon-50 hover:border-maroon-400 transition-all duration-350 min-w-0 md:min-w-[200px] justify-center"
                        >
                            <span>View Collection</span>
                            <svg
                                className="w-4 h-4"
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
                        </Link>
                    </motion.div>

                    {/* Trust indicators - subtle */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-10 md:mt-16 pt-8 md:pt-12 border-t border-warm-200/50"
                    >
                        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 text-xs md:text-sm text-warm-700">
                            <div className="flex items-center space-x-1.5 md:space-x-2">
                                <svg className="w-5 h-5 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                                <span>Custom Made</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span>Traditional Craft</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span>Personalized Service</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}


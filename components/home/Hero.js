'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    })
    const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
    const contentY = useTransform(scrollYProgress, [0, 0.55], ['0%', '8%'])

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #FBF8F3 0%, #F5EFE6 40%, #F9F4EE 70%, #FAF7F2 100%)' }}
        >
            {/* Subtle noise/linen texture overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px',
                }}
            />

            {/* Soft rose-gold radial glow — top center */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                    width: '80vw',
                    height: '60vh',
                    background: 'radial-gradient(ellipse at top, rgba(212,175,55,0.09) 0%, rgba(139,38,53,0.04) 40%, transparent 70%)',
                }}
            />

            {/* Soft blush accent — bottom right */}
            <div
                className="absolute bottom-0 right-0 pointer-events-none"
                style={{
                    width: '40vw',
                    height: '50vh',
                    background: 'radial-gradient(ellipse at bottom right, rgba(139,38,53,0.06) 0%, transparent 65%)',
                }}
            />

            {/* Decorative thin vertical rule lines */}
            <div className="absolute inset-0 flex justify-between px-8 md:px-20 pointer-events-none">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-warm-300/20 to-transparent" />
                <div className="w-px h-full bg-gradient-to-b from-transparent via-warm-300/20 to-transparent" />
            </div>

            {/* Main Content */}
            <motion.div
                style={{ opacity: contentOpacity, y: contentY }}
                className="relative z-10 w-full container-custom py-28 md:py-36 flex flex-col items-center text-center"
            >
                {/* Eyebrow label */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4 mb-10"
                >
                    <span className="h-px w-10 md:w-14" style={{ background: 'rgba(212,175,55,0.45)' }} />
                    <span
                        className="font-sans font-medium uppercase tracking-widest"
                        style={{ fontSize: '10px', letterSpacing: '0.32em', color: 'rgba(166,134,31,0.9)' }}
                    >
                        Est. 1981 &nbsp;·&nbsp; Handcrafted in Maharashtra
                    </span>
                    <span className="h-px w-10 md:w-14" style={{ background: 'rgba(212,175,55,0.45)' }} />
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display leading-[0.92] tracking-[-0.025em] text-warm-900 mb-2"
                    style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
                >
                    Wedding Wear
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center gap-4 mb-6"
                >
                    <span
                        className="hidden sm:block h-px flex-shrink-0"
                        style={{ width: '50px', background: 'rgba(212,175,55,0.35)' }}
                    />
                    <span
                        className="font-display italic leading-[0.92] tracking-[-0.025em]"
                        style={{
                            fontSize: 'clamp(3rem, 9vw, 8rem)',
                            color: '#8B2635',
                        }}
                    >
                        for Bride &amp; Groom
                    </span>
                    <span
                        className="hidden sm:block h-px flex-shrink-0"
                        style={{ width: '50px', background: 'rgba(212,175,55,0.35)' }}
                    />
                </motion.div>

                {/* Ornamental divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 my-4"
                >
                    <span className="h-px w-14 md:w-20" style={{ background: 'rgba(212,175,55,0.3)' }} />
                    <svg viewBox="0 0 32 32" className="flex-shrink-0" style={{ width: '16px', height: '16px', fill: 'rgba(166,134,31,0.7)' }}>
                        <path d="M16 0l3.09 9.51H29l-8.09 5.88 3.09 9.51L16 18.99l-7.91 5.91 3.09-9.51L3 9.51h9.91z" />
                    </svg>
                    <svg viewBox="0 0 16 16" className="flex-shrink-0" style={{ width: '9px', height: '9px', fill: 'rgba(166,134,31,0.45)' }}>
                        <path d="M8 0l2 6h6l-5 3.6 1.9 5.9L8 12l-4.9 3.5L5 9.6 0 6h6z" />
                    </svg>
                    <svg viewBox="0 0 32 32" className="flex-shrink-0" style={{ width: '16px', height: '16px', fill: 'rgba(166,134,31,0.7)' }}>
                        <path d="M16 0l3.09 9.51H29l-8.09 5.88 3.09 9.51L16 18.99l-7.91 5.91 3.09-9.51L3 9.51h9.91z" />
                    </svg>
                    <span className="h-px w-14 md:w-20" style={{ background: 'rgba(212,175,55,0.3)' }} />
                </motion.div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif italic max-w-2xl mx-auto mt-4 mb-10 leading-relaxed"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.18rem)', color: 'rgba(87,65,55,0.65)' }}
                >
                    Custom-made pheta and dupatta crafted to match your head size, wedding attire,
                    and ceremonial style — for bride, groom &amp; entire baraat.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* Primary CTA */}
                    <Link
                        href="/products"
                        className="group inline-flex items-center gap-3 rounded-xl font-sans font-semibold text-sm md:text-base transition-all duration-300"
                        style={{
                            padding: '14px 34px',
                            backgroundColor: '#8B2635',
                            color: '#FFFFFF',
                            boxShadow: '0 4px 20px rgba(139,38,53,0.2)',
                            letterSpacing: '0.01em',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#7A1F2D'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(139,38,53,0.28)'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#8B2635'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(139,38,53,0.2)'; }}
                    >
                        <span>Explore Collection</span>
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>

                    {/* WhatsApp CTA */}
                    <a
                        href="https://wa.me/917020708747?text=Hi, I'd like to inquire about custom wedding accessories."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-xl font-sans font-semibold text-sm md:text-base transition-all duration-300"
                        style={{
                            padding: '14px 34px',
                            backgroundColor: 'rgba(255,255,255,0.7)',
                            color: '#2D1C1C',
                            border: '1px solid rgba(212,175,55,0.3)',
                            backdropFilter: 'blur(8px)',
                            letterSpacing: '0.01em',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.55)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                        <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span>Book Consultation</span>
                    </a>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.0 }}
                    className="mt-16 md:mt-20 pt-8 flex flex-wrap justify-center gap-6 md:gap-10"
                    style={{ borderTop: '1px solid rgba(139,38,53,0.1)' }}
                >
                    {[
                        { icon: '✦', label: '45 Years of Craftsmanship' },
                        { icon: '✦', label: 'Est. 1981 · Latur, Maharashtra' },
                        { icon: '✦', label: 'Custom Made to Measure' },
                        { icon: '✦', label: 'Pan-India Delivery' },
                    ].map((item) => (
                        <span
                            key={item.label}
                            className="font-sans flex items-center gap-2"
                            style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'rgba(87,65,55,0.45)', textTransform: 'uppercase' }}
                        >
                            <span style={{ color: 'rgba(166,134,31,0.65)' }}>{item.icon}</span>
                            {item.label}
                        </span>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                style={{ color: 'rgba(87,65,55,0.3)' }}
            >
                <span className="font-sans uppercase" style={{ fontSize: '9px', letterSpacing: '0.22em' }}>Scroll</span>
                <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                    className="w-px h-8"
                    style={{ background: 'linear-gradient(to bottom, rgba(166,134,31,0.4), transparent)' }}
                />
            </motion.div>
        </section>
    )
}

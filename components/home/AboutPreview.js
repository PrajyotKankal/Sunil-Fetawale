'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const stats = [
    { value: '5000+', label: 'Weddings Served' },
    { value: '100%', label: 'Custom Made' },
    { value: '45', label: 'Years of Legacy' },
    { value: '1981', label: 'Year Founded' },
]

const features = [
    'Custom feta made to exact head measurement',
    'Bridal ghunghat with traditional embroidery',
    'Bride–groom matching combination sets',
    'Baraat accessories for the full wedding party',
    'Pan-India delivery within 3–7 days',
]

export default function AboutPreview() {
    return (
        <section className="section-spacing overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT: Stats + Quote visual block */}
                    <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Background decorative blob */}
                        <div
                            className="absolute -top-8 -left-8 w-3/4 h-3/4 rounded-3xl pointer-events-none"
                            style={{ backgroundColor: 'rgba(212,175,55,0.05)', zIndex: 0 }}
                        />

                        {/* Main content block — warm ivory card */}
                        <div
                            className="relative rounded-2xl overflow-hidden"
                            style={{
                                backgroundColor: '#FAF8F5',
                                border: '1px solid rgba(212,175,55,0.18)',
                                padding: '2.5rem',
                                zIndex: 1,
                                minHeight: '400px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: '0 4px 32px rgba(87,65,55,0.07)',
                            }}
                        >
                            {/* Top ornamental */}
                            <div className="flex items-center gap-3 mb-8">
                                <span className="h-px flex-1" style={{ backgroundColor: 'rgba(212,175,55,0.35)' }} />
                                <svg viewBox="0 0 32 32" style={{ width: '14px', height: '14px', fill: 'rgba(166,134,31,0.7)' }}>
                                    <path d="M16 0l3.09 9.51H29l-8.09 5.88 3.09 9.51L16 18.99l-7.91 5.91 3.09-9.51L3 9.51h9.91z" />
                                </svg>
                                <span className="h-px flex-1" style={{ backgroundColor: 'rgba(212,175,55,0.35)' }} />
                            </div>

                            {/* Pull quote */}
                            <blockquote className="flex-1">
                                <p
                                    className="font-display italic leading-relaxed mb-6"
                                    style={{ fontSize: 'clamp(1.2rem, 2.8vw, 1.6rem)', color: '#2D1C1C' }}
                                >
                                    &ldquo;Since 1981, every feta and ghunghat we craft carries the pride of Maharashtrian tradition — made with love, for your most sacred day.&rdquo;
                                </p>
                                <footer>
                                    <p
                                        className="font-sans font-semibold"
                                        style={{ fontSize: '12px', color: '#A6861F', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                                    >
                                        — Sunil Collection
                                    </p>
                                    <p
                                        className="font-sans mt-0.5"
                                        style={{ fontSize: '11px', color: 'rgba(87,65,55,0.45)' }}
                                    >
                                        Latur, Maharashtra
                                    </p>
                                </footer>
                            </blockquote>

                            {/* Stats row */}
                            <div
                                className="grid grid-cols-2 gap-5 mt-8 pt-8"
                                style={{ borderTop: '1px solid rgba(212,175,55,0.18)' }}
                            >
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <p
                                            className="font-display"
                                            style={{ fontSize: '2rem', color: '#8B2635', lineHeight: 1, letterSpacing: '-0.02em' }}
                                        >
                                            {stat.value}
                                        </p>
                                        <p
                                            className="font-sans mt-1"
                                            style={{ fontSize: '11px', color: 'rgba(87,65,55,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase' }}
                                        >
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative dot grid */}
                        <div
                            className="absolute -bottom-8 -right-8 pointer-events-none"
                            style={{
                                width: '130px',
                                height: '130px',
                                backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.2) 1.5px, transparent 1.5px)',
                                backgroundSize: '16px 16px',
                                zIndex: 0,
                            }}
                        />
                    </motion.div>

                    {/* RIGHT: Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Eyebrow */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-px w-10" style={{ backgroundColor: 'rgba(212,175,55,0.55)' }} />
                            <span
                                className="font-sans font-medium uppercase"
                                style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#A6861F' }}
                            >
                                Our Story
                            </span>
                        </div>

                        <h2
                            className="font-serif mb-6 leading-tight"
                            style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.8rem)', color: '#2D1C1C', letterSpacing: '-0.015em' }}
                        >
                            Craftsmanship Rooted in<br />
                            <em className="not-italic" style={{ color: '#8B2635' }}>Tradition &amp; Pride</em>
                        </h2>

                        <p className="font-sans leading-relaxed text-lg mb-5" style={{ color: 'rgba(87,65,55,0.75)' }}>
                            Established in <strong style={{ color: '#7A1F2D' }}>1981</strong>, we are Latur, Maharashtra’s most trusted wedding accessories specialist — with over <strong style={{ color: '#7A1F2D' }}>45 years</strong> of craftsmanship and thousands of families across the state. Every piece we make — from bridal ghunghat to groom pheta — is crafted by hand to your exact measurements.
                        </p>

                        <p className="font-sans leading-relaxed mb-8" style={{ color: 'rgba(87,65,55,0.6)', fontSize: '0.95rem' }}>
                            Our custom-made feta and dupatta are coordinated to match your wedding attire,
                            color palette, and ceremonial style. No two pieces are alike — because no two
                            weddings are alike.
                        </p>

                        {/* Feature list */}
                        <ul className="space-y-3 mb-10">
                            {features.map((item) => (
                                <li key={item} className="flex items-start gap-3 font-sans text-sm" style={{ color: 'rgba(87,65,55,0.75)' }}>
                                    <span
                                        className="flex-shrink-0 mt-0.5"
                                        style={{ color: '#A6861F', fontSize: '13px' }}
                                    >
                                        ✦
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 font-sans font-semibold text-sm transition-all duration-300 group"
                                style={{
                                    padding: '12px 26px',
                                    backgroundColor: '#8B2635',
                                    color: '#FFFFFF',
                                    borderRadius: '10px',
                                    textDecoration: 'none',
                                    boxShadow: '0 2px 14px rgba(139,38,53,0.2)',
                                    letterSpacing: '0.01em',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#7A1F2D'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#8B2635'; e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                <span>Read Our Story</span>
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <a
                                href="https://wa.me/917020708747"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-sans font-semibold text-sm transition-all duration-300"
                                style={{
                                    padding: '12px 26px',
                                    border: '1.5px solid rgba(139,38,53,0.25)',
                                    color: '#7A1F2D',
                                    borderRadius: '10px',
                                    textDecoration: 'none',
                                    letterSpacing: '0.01em',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(139,38,53,0.05)'; e.currentTarget.style.borderColor = 'rgba(139,38,53,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(139,38,53,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span>WhatsApp Us</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

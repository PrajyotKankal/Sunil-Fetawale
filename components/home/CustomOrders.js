'use client'

import { motion } from 'framer-motion'

const steps = [
    {
        step: '01',
        title: 'Share Your Details',
        desc: 'Send your head measurement, wedding date, attire colour, and style preference via WhatsApp.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
        ),
    },
    {
        step: '02',
        title: 'We Design It',
        desc: 'Our craftsmen handcraft your pheta, ghunghat, or dupatta to match your exact style and measurements.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
    },
    {
        step: '03',
        title: 'Quality Check',
        desc: 'Every piece is inspected for quality, symmetry, and craftsmanship before it leaves our workshop.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
    },
    {
        step: '04',
        title: 'Delivered to You',
        desc: 'Packed and shipped across Maharashtra and all of India — delivered before your wedding day.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
        ),
    },
]

export default function CustomOrders() {
    return (
        <section
            className="section-spacing relative overflow-hidden"
            style={{ backgroundColor: '#FAF8F5' }}
        >
            {/* Subtle top and bottom decorative border lines */}
            <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3) 30%, rgba(212,175,55,0.5) 50%, rgba(212,175,55,0.3) 70%, transparent)' }}
            />
            <div
                className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3) 30%, rgba(212,175,55,0.5) 50%, rgba(212,175,55,0.3) 70%, transparent)' }}
            />

            {/* Soft background accent */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                    width: '70%',
                    height: '40%',
                    background: 'radial-gradient(ellipse at top, rgba(212,175,55,0.06) 0%, transparent 70%)',
                }}
            />

            <div className="container-custom relative z-10">

                {/* Section Header */}
                <div className="text-center mb-14 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-4 mb-5"
                    >
                        <span className="h-px w-10" style={{ backgroundColor: 'rgba(212,175,55,0.5)' }} />
                        <span
                            className="font-sans font-medium uppercase"
                            style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#A6861F' }}
                        >
                            How It Works
                        </span>
                        <span className="h-px w-10" style={{ backgroundColor: 'rgba(212,175,55,0.5)' }} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-serif mb-4 leading-tight"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#2D1C1C', letterSpacing: '-0.015em' }}
                    >
                        Your Custom Order,<br />
                        <em className="not-italic" style={{ color: '#8B2635' }}>Made Just for You</em>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.18 }}
                        className="font-sans max-w-xl mx-auto"
                        style={{ color: 'rgba(87,65,55,0.6)', fontSize: '1rem', lineHeight: '1.7' }}
                    >
                        Every pheta, ghunghat, and dupatta is made to order. No ready-made stock —
                        only pieces crafted specifically for your wedding.
                    </motion.p>
                </div>

                {/* Steps grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-14">
                    {steps.map((item, idx) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Connector line between steps (desktop) */}
                            {idx < steps.length - 1 && (
                                <div
                                    className="hidden lg:block absolute top-9 left-full pointer-events-none"
                                    style={{
                                        width: '100%',
                                        height: '1px',
                                        background: 'linear-gradient(90deg, rgba(212,175,55,0.3) 0%, transparent 100%)',
                                        zIndex: 0,
                                    }}
                                />
                            )}

                            <div
                                className="relative rounded-2xl p-6 h-full transition-all duration-300 group cursor-default"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    border: '1px solid rgba(212,175,55,0.15)',
                                    boxShadow: '0 2px 16px rgba(87,65,55,0.05)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'
                                    e.currentTarget.style.boxShadow = '0 6px 28px rgba(87,65,55,0.1)'
                                    e.currentTarget.style.transform = 'translateY(-2px)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)'
                                    e.currentTarget.style.boxShadow = '0 2px 16px rgba(87,65,55,0.05)'
                                    e.currentTarget.style.transform = 'translateY(0)'
                                }}
                            >
                                {/* Step number */}
                                <span
                                    className="font-display block mb-4"
                                    style={{
                                        fontSize: '2.6rem',
                                        lineHeight: 1,
                                        color: 'rgba(212,175,55,0.2)',
                                        fontStyle: 'italic',
                                        letterSpacing: '-0.02em',
                                    }}
                                >
                                    {item.step}
                                </span>

                                {/* Icon */}
                                <div
                                    className="mb-4 inline-flex items-center justify-center rounded-xl"
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        backgroundColor: 'rgba(139,38,53,0.07)',
                                        color: '#8B2635',
                                    }}
                                >
                                    {item.icon}
                                </div>

                                <h3
                                    className="font-serif mb-2"
                                    style={{ fontSize: '1.15rem', color: '#2D1C1C' }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="font-sans text-sm leading-relaxed"
                                    style={{ color: 'rgba(87,65,55,0.6)' }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <a
                        href="https://wa.me/917020708747?text=Hi, I'd like to place a custom order for my wedding."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 font-sans font-semibold transition-all duration-300"
                        style={{
                            padding: '14px 34px',
                            backgroundColor: '#25D366',
                            color: '#FFFFFF',
                            borderRadius: '12px',
                            fontSize: '15px',
                            boxShadow: '0 4px 20px rgba(37,211,102,0.25)',
                            letterSpacing: '0.01em',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1EAE54'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,211,102,0.3)'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#25D366'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.25)'; }}
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span>Start Your Custom Order</span>
                    </a>

                    <p
                        className="font-sans mt-4"
                        style={{ fontSize: '12px', color: 'rgba(87,65,55,0.4)', letterSpacing: '0.04em' }}
                    >
                        Typically responds within 30 minutes · Serving Latur, Maharashtra &amp; all of India
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

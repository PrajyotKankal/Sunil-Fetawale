'use client'

import { motion } from 'framer-motion'

export default function WhatsAppStrip() {
    return (
        <section className="relative overflow-hidden" style={{ backgroundColor: '#8B2635' }}>
            {/* Subtle gold pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M30 30l15-15M15 45l15-15M30 30l-15 15M45 15l-15 15'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px',
                }}
            />

            {/* Gold top line */}
            <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{ backgroundColor: 'rgba(212,175,55,0.5)' }}
            />

            <div className="container-custom relative z-10 py-10 md:py-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">

                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left"
                    >
                        <p
                            className="font-sans font-semibold uppercase mb-2"
                            style={{ fontSize: '11px', letterSpacing: '0.28em', color: 'rgba(212,175,55,0.85)' }}
                        >
                            Custom Order · Ready in 3–5 Days
                        </p>
                        <h2
                            className="font-serif text-white leading-tight"
                            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}
                        >
                            Order Your Custom Pheta &amp; Ghunghat
                        </h2>
                        <p
                            className="font-sans mt-2"
                            style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: '1.6' }}
                        >
                            Send your measurements on WhatsApp and we'll craft it just for you. 45 years of tradition — delivered to your door.
                        </p>
                    </motion.div>

                    {/* Right: CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col items-center gap-3 flex-none"
                    >
                        <a
                            href="https://wa.me/917020708747?text=Hi, I want to place a custom order for pheta/ghunghat."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 font-sans font-bold transition-all duration-300"
                            style={{
                                padding: '16px 36px',
                                backgroundColor: '#25D366',
                                color: '#FFFFFF',
                                borderRadius: '14px',
                                fontSize: '16px',
                                boxShadow: '0 6px 28px rgba(0,0,0,0.25)',
                                letterSpacing: '0.01em',
                                whiteSpace: 'nowrap',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1EAE54'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(0,0,0,0.3)'; }}
                            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#25D366'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.25)'; }}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span>Chat on WhatsApp</span>
                        </a>

                        <a
                            href="tel:+917020708747"
                            className="font-sans transition-colors duration-300"
                            style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em', textDecoration: 'none' }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#FFFFFF' }}
                            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
                        >
                            📞 +91 70207 08747
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Gold bottom line */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
                style={{ backgroundColor: 'rgba(212,175,55,0.3)' }}
            />
        </section>
    )
}

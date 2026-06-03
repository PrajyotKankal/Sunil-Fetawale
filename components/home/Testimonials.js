'use client'

import { motion } from 'framer-motion'

const reviews = [
    {
        name: 'Priya & Rohit Deshmukh',
        city: 'Latur, Maharashtra',
        rating: 5,
        text: 'The bridal ghunghat was absolutely beautiful. The embroidery was so detailed and the quality was exactly as described. Got delivered 3 days before our wedding. Highly recommend Sunil Collection!',
        product: 'Bridal Ghunghat',
        initials: 'PD',
        color: '#8B2635',
    },
    {
        name: 'Anil Patil',
        city: 'Osmanabad, Maharashtra',
        rating: 5,
        text: 'Ordered a custom pheta for my son\'s wedding. They made it exactly to his head measurement. It was the most elegant pheta at the entire baraat. The whole family loved it.',
        product: 'Custom Groom Pheta',
        initials: 'AP',
        color: '#A6861F',
    },
    {
        name: 'Sunita Kulkarni',
        city: 'Nanded, Maharashtra',
        rating: 5,
        text: 'We ordered matching sets for the bride and groom. The coordination in colour and design was perfect. Sunil Saheb is very helpful on WhatsApp. Will order again for our daughter\'s wedding!',
        product: 'Bride & Groom Set',
        initials: 'SK',
        color: '#5C7A4A',
    },
]

function StarRating({ count }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className="w-4 h-4"
                    fill={i < count ? '#D4AF37' : 'none'}
                    stroke="#D4AF37"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                </svg>
            ))}
        </div>
    )
}

export default function Testimonials() {
    return (
        <section className="section-spacing relative overflow-hidden" style={{ backgroundColor: '#FAF8F5' }}>
            {/* Decorative top border */}
            <div
                className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4) 30%, rgba(212,175,55,0.6) 50%, rgba(212,175,55,0.4) 70%, transparent)' }}
            />

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-5">
                        <span className="h-px w-10" style={{ background: 'rgba(212,175,55,0.5)' }} />
                        <span
                            className="font-sans font-medium uppercase"
                            style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#A6861F' }}
                        >
                            Customer Stories
                        </span>
                        <span className="h-px w-10" style={{ background: 'rgba(212,175,55,0.5)' }} />
                    </div>

                    <h2
                        className="font-serif mb-3 leading-tight"
                        style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', color: '#2D1C1C', letterSpacing: '-0.015em' }}
                    >
                        Families Across Maharashtra{' '}
                        <em className="not-italic" style={{ color: '#8B2635' }}>Trust Us</em>
                    </h2>
                    <p
                        className="font-sans max-w-xl mx-auto"
                        style={{ color: 'rgba(87,65,55,0.6)', fontSize: '1rem', lineHeight: '1.7' }}
                    >
                        Since 1981, thousands of brides and grooms have chosen Sunil Collection for their most important day.
                    </p>
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                            className="relative rounded-2xl p-6 flex flex-col"
                            style={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid rgba(212,175,55,0.15)',
                                boxShadow: '0 2px 16px rgba(87,65,55,0.06)',
                            }}
                        >
                            {/* Quote mark */}
                            <div
                                className="font-serif absolute top-4 right-5 select-none pointer-events-none"
                                style={{ fontSize: '5rem', lineHeight: 1, color: 'rgba(212,175,55,0.12)', fontStyle: 'italic' }}
                            >
                                "
                            </div>

                            {/* Stars */}
                            <StarRating count={review.rating} />

                            {/* Product tag */}
                            <span
                                className="font-sans inline-block mt-3 mb-4"
                                style={{
                                    fontSize: '10px',
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    color: review.color,
                                    backgroundColor: `${review.color}12`,
                                    padding: '3px 10px',
                                    borderRadius: '50px',
                                    width: 'fit-content',
                                }}
                            >
                                {review.product}
                            </span>

                            {/* Review text */}
                            <p
                                className="font-sans leading-relaxed flex-1 mb-5"
                                style={{ fontSize: '14px', color: 'rgba(87,65,55,0.75)', lineHeight: '1.75' }}
                            >
                                "{review.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}>
                                <div
                                    className="flex-none flex items-center justify-center rounded-full font-sans font-bold"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: `${review.color}15`,
                                        color: review.color,
                                        fontSize: '13px',
                                    }}
                                >
                                    {review.initials}
                                </div>
                                <div>
                                    <p className="font-sans font-semibold" style={{ fontSize: '13px', color: '#2D1C1C' }}>
                                        {review.name}
                                    </p>
                                    <p className="font-sans" style={{ fontSize: '11px', color: 'rgba(87,65,55,0.5)', letterSpacing: '0.04em' }}>
                                        {review.city}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Overall rating strip */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10"
                >
                    <div className="text-center">
                        <p className="font-serif" style={{ fontSize: '3rem', color: '#8B2635', lineHeight: 1 }}>5.0</p>
                        <StarRating count={5} />
                        <p className="font-sans mt-1" style={{ fontSize: '11px', color: 'rgba(87,65,55,0.5)', letterSpacing: '0.08em' }}>Average Rating</p>
                    </div>
                    <div
                        className="hidden sm:block h-14 w-px"
                        style={{ backgroundColor: 'rgba(212,175,55,0.25)' }}
                    />
                    <div className="text-center">
                        <p className="font-serif" style={{ fontSize: '3rem', color: '#8B2635', lineHeight: 1 }}>5000+</p>
                        <p className="font-sans mt-1" style={{ fontSize: '11px', color: 'rgba(87,65,55,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Weddings Served</p>
                    </div>
                    <div
                        className="hidden sm:block h-14 w-px"
                        style={{ backgroundColor: 'rgba(212,175,55,0.25)' }}
                    />
                    <div className="text-center">
                        <p className="font-serif" style={{ fontSize: '3rem', color: '#8B2635', lineHeight: 1 }}>45</p>
                        <p className="font-sans mt-1" style={{ fontSize: '11px', color: 'rgba(87,65,55,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Years of Trust</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

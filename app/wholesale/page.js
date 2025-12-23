'use client'

import { motion } from 'framer-motion'

export default function WholesalePage() {
    const benefits = [
        {
            title: 'Bulk Order Pricing',
            description: 'Competitive rates for bulk orders with flexible minimum quantities tailored to your business needs.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
        },
        {
            title: 'Consistent Quality',
            description: 'Every piece maintains the same high standard. Our quality control ensures uniformity across large orders.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        },
        {
            title: 'Long-Term Partnerships',
            description: 'We value lasting relationships. Enjoy priority fulfillment and dedicated support for regular partners.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            title: 'Custom Orders',
            description: 'Need specific colors, patterns or embellishments? We accommodate custom requirements for bulk orders.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
            ),
        },
        {
            title: 'Reliable Delivery',
            description: 'On-time delivery you can count on. We understand the importance of meeting your deadlines.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: 'Wide Selection',
            description: 'Access to our complete catalog including bridal ghunghats, groom shawls, and baraat accessories.',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
        },
    ]

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
        },
    }

    return (
        <div className="bg-ivory-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-warm-50 border-b border-warm-200/50 py-16 md:py-24">
                <div className="container-custom">
                    <motion.div
                        className="max-w-3xl"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        <motion.p
                            variants={fadeIn}
                            className="text-sm md:text-base text-warm-600 tracking-wider uppercase font-medium mb-4"
                        >
                            For Retailers & Businesses
                        </motion.p>
                        <motion.h1
                            variants={fadeIn}
                            className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-800 mb-6"
                        >
                            Wholesale Partnership
                        </motion.h1>
                        <motion.p
                            variants={fadeIn}
                            className="text-xl text-warm-600 leading-relaxed"
                        >
                            Partner with us to bring premium Indian wedding accessories to your customers.
                            We supply retailers, event planners, and wedding coordinators across India with
                            authentic, high-quality products at competitive wholesale prices.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 md:py-24">
                <div className="container-custom">
                    <motion.div
                        className="text-center max-w-2xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="font-serif text-3xl md:text-4xl text-warm-800 mb-4">
                            Why Partner With Us
                        </h2>
                        <p className="text-lg text-warm-600">
                            We make wholesale ordering simple, reliable, and beneficial for your business.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white border border-warm-200/80 rounded-lg p-8"
                            >
                                <div className="w-12 h-12 bg-maroon-50 rounded-lg flex items-center justify-center text-maroon-600 mb-5">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-serif text-xl text-warm-800 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-warm-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-warm-50 border-y border-warm-200/50 py-16 md:py-24">
                <div className="container-custom">
                    <motion.div
                        className="max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="font-serif text-3xl md:text-4xl text-warm-800 mb-8 text-center">
                            How to Get Started
                        </h2>

                        <div className="space-y-6">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-10 h-10 bg-maroon-600 text-white rounded-full flex items-center justify-center font-serif text-lg">
                                    1
                                </div>
                                <div className="pt-1">
                                    <h3 className="font-serif text-xl text-warm-800 mb-2">Reach Out</h3>
                                    <p className="text-warm-600">
                                        Contact us via WhatsApp or our inquiry form with your business details and requirements.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-10 h-10 bg-maroon-600 text-white rounded-full flex items-center justify-center font-serif text-lg">
                                    2
                                </div>
                                <div className="pt-1">
                                    <h3 className="font-serif text-xl text-warm-800 mb-2">Discuss Requirements</h3>
                                    <p className="text-warm-600">
                                        We'll understand your needs, share our catalog, and provide tailored pricing based on quantities.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-10 h-10 bg-maroon-600 text-white rounded-full flex items-center justify-center font-serif text-lg">
                                    3
                                </div>
                                <div className="pt-1">
                                    <h3 className="font-serif text-xl text-warm-800 mb-2">Place Your Order</h3>
                                    <p className="text-warm-600">
                                        Finalize selections, confirm payment terms, and we'll handle the rest with reliable delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24">
                <div className="container-custom">
                    <motion.div
                        className="max-w-2xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="font-serif text-3xl md:text-4xl text-warm-800 mb-4">
                            Ready to Partner?
                        </h2>
                        <p className="text-lg text-warm-600 mb-8">
                            Get in touch today to discuss your wholesale requirements. We typically respond within 24 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://wa.me/917020708747?text=Hi, I'm interested in wholesale partnership. Please share more details."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-8 py-4 bg-maroon-600 text-white rounded-lg font-medium text-base hover:bg-maroon-700 transition-colors duration-350 min-w-[200px] justify-center"
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

                            <a
                                href="mailto:wholesale@sunilphetawale.com?subject=Wholesale Inquiry"
                                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-maroon-600 border border-maroon-300 rounded-lg font-medium text-base hover:bg-maroon-50 hover:border-maroon-400 transition-all duration-350 min-w-[200px] justify-center"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Email Us</span>
                            </a>
                        </div>

                        <p className="text-sm text-warm-500 mt-6">
                            For urgent inquiries, WhatsApp is recommended for fastest response.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}


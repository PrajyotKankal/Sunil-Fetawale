'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
    {
        question: 'What types of wedding accessories do you offer?',
        answer: 'We specialize in traditional Maharashtrian wedding accessories including phetas (turbans) for grooms, bridal ghunghats, wedding dupattas, and baraat accessories. Each piece is handcrafted with premium materials.'
    },
    {
        question: 'Do you offer custom sizing?',
        answer: 'Yes! We provide custom measurement services to ensure a perfect fit. Simply share your head circumference for phetas or body measurements for dupattas, and we\'ll craft the piece specifically for you.'
    },
    {
        question: 'How long does it take to make a custom order?',
        answer: 'Custom orders typically take 7-14 days depending on the complexity of the design. For rush orders needed within a week, please contact us directly on WhatsApp to discuss availability.'
    },
    {
        question: 'What materials do you use?',
        answer: 'We use premium quality materials including pure silk, cotton, and brocade fabrics. Our embroidery work features real zari (gold/silver thread) and high-quality beadwork. All materials are sourced from trusted suppliers.'
    },
    {
        question: 'Do you ship across India?',
        answer: 'Yes, we ship to all major cities across India. Shipping typically takes 3-5 business days for most locations. We pack each piece carefully to ensure it arrives in perfect condition.'
    },
    {
        question: 'What is your return/exchange policy?',
        answer: 'Since most of our products are custom-made to your measurements, we do not offer returns. However, if there\'s a manufacturing defect or the item doesn\'t match your order, we\'ll gladly exchange it. Please inspect your order upon delivery.'
    },
    {
        question: 'How do I place an order?',
        answer: 'The easiest way is to contact us on WhatsApp. Browse our products, add items to your inquiry cart, and send us the inquiry. We\'ll discuss pricing, measurements, and customization options with you directly.'
    },
    {
        question: 'Do you offer wholesale pricing?',
        answer: 'Yes, we offer special pricing for bulk orders and wholesale customers. If you\'re a retailer or event planner, please visit our Wholesale page or contact us directly for more information.'
    },
    {
        question: 'Can I see samples before ordering?',
        answer: 'We have a gallery of our work available on the website. For wholesale customers, we can arrange sample viewings. For individual orders, we\'ll share detailed photos and videos of similar pieces.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept UPI payments, bank transfers, and cash on delivery for select locations. For large orders, we typically require a 50% advance to begin work on your custom piece.'
    }
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-warm-50 border-b border-warm-200/50 section-spacing">
                <div className="container-custom text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-5xl text-warm-800 mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-warm-600 max-w-2xl mx-auto"
                    >
                        Everything you need to know about ordering custom wedding accessories.
                    </motion.p>
                </div>
            </section>

            {/* FAQ List */}
            <section className="section-spacing">
                <div className="container-custom max-w-3xl">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="border border-warm-200 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 text-left bg-white hover:bg-warm-50 transition-colors flex items-center justify-between"
                                >
                                    <span className="font-medium text-warm-800 pr-4">
                                        {faq.question}
                                    </span>
                                    <motion.svg
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        className="w-5 h-5 text-warm-500 flex-shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 text-warm-600 bg-warm-50/50">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="bg-warm-50 border-t border-warm-200/50 section-spacing">
                <div className="container-custom text-center">
                    <h2 className="font-serif text-2xl md:text-3xl text-warm-800 mb-4">
                        Still Have Questions?
                    </h2>
                    <p className="text-warm-600 mb-8 max-w-lg mx-auto">
                        We're here to help! Reach out to us on WhatsApp and we'll get back to you within hours.
                    </p>
                    <a
                        href="https://wa.me/917020708747?text=Hi, I have a question about your products."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-maroon-600 text-white rounded-lg font-medium hover:bg-maroon-700 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span>Ask on WhatsApp</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

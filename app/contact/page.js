'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Generate WhatsApp message from form
        const message = `Hi, I'm ${formData.name}.\n\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
        const whatsappUrl = `https://wa.me/917020708747?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, '_blank')
        setSubmitted(true)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <div className="bg-ivory-50 min-h-screen">
            {/* Header */}
            <section className="bg-warm-50 border-b border-warm-200/50 py-12 md:py-16">
                <div className="container-custom">
                    <motion.div
                        className="max-w-2xl"
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <motion.p variants={fadeIn} className="text-sm text-warm-600 tracking-wider uppercase font-medium mb-3">
                            Get in Touch
                        </motion.p>
                        <motion.h1 variants={fadeIn} className="font-serif text-4xl md:text-5xl text-warm-800 mb-4">
                            Contact Us
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-lg text-warm-600">
                            Have questions about our products? We're here to help.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* Left: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Contact Details */}
                            <div className="mb-10">
                                <h2 className="font-serif text-2xl text-warm-800 mb-6">Contact Details</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-maroon-50 rounded-lg flex items-center justify-center text-maroon-600 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-warm-800">Phone</p>
                                            <a href="tel:+917020708747" className="text-warm-600 hover:text-maroon-600 transition-colors">
                                                +91 70207 08747
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-maroon-50 rounded-lg flex items-center justify-center text-maroon-600 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-warm-800">Email</p>
                                            <a href="mailto:contact@sunilphetawale.com" className="text-warm-600 hover:text-maroon-600 transition-colors">
                                                contact@sunilphetawale.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-maroon-50 rounded-lg flex items-center justify-center text-maroon-600 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-warm-800">Address</p>
                                            <p className="text-warm-600">
                                                Shop No 2, Kapad Line, MG Rd,<br />
                                                Sawe Wadi, Latur, Maharashtra 413512
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="mb-10">
                                <h2 className="font-serif text-2xl text-warm-800 mb-6">Business Hours</h2>
                                <div className="space-y-2 text-warm-600">
                                    <div className="flex justify-between">
                                        <span>Monday - Saturday</span>
                                        <span className="text-warm-800">10:00 AM - 7:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="text-warm-800">By Appointment</span>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/917020708747"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 px-6 py-3 bg-maroon-600 text-white rounded-lg font-medium hover:bg-maroon-700 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span>Chat on WhatsApp</span>
                            </a>

                            {/* Map */}
                            <div className="mt-10">
                                <h2 className="font-serif text-2xl text-warm-800 mb-6">Location</h2>
                                <a
                                    href="https://maps.app.goo.gl/pR9LAr4jzDsj8PjR6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block aspect-video bg-warm-100 rounded-lg border border-warm-200 hover:border-warm-300 transition-colors overflow-hidden group"
                                >
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center text-warm-500 group-hover:text-maroon-600 transition-colors">
                                            <svg className="w-12 h-12 mx-auto mb-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <p className="text-sm font-medium">View on Google Maps</p>
                                            <p className="text-xs mt-1">Click to open directions</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                        {/* Right: Inquiry Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="bg-white border border-warm-200/80 rounded-lg p-8">
                                <h2 className="font-serif text-2xl text-warm-800 mb-2">Send an Inquiry</h2>
                                <p className="text-warm-600 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-maroon-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-maroon-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h3 className="font-serif text-xl text-warm-800 mb-2">Message Sent!</h3>
                                        <p className="text-warm-600">We'll respond as soon as possible.</p>
                                        <button
                                            onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', message: '' }); }}
                                            className="mt-6 text-maroon-600 hover:text-maroon-700 font-medium"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-warm-800 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500 outline-none transition-all bg-white text-warm-800"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-warm-800 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500 outline-none transition-all bg-white text-warm-800"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-warm-800 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-maroon-500 outline-none transition-all bg-white text-warm-800 resize-none"
                                                placeholder="Tell us about your requirements..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full px-6 py-3.5 bg-maroon-600 text-white rounded-lg font-medium hover:bg-maroon-700 transition-colors"
                                        >
                                            Send Message via WhatsApp
                                        </button>

                                        <p className="text-xs text-warm-500 text-center">
                                            This form opens WhatsApp with your message pre-filled.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}


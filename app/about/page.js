'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-warm-50 border-b border-warm-200/50 section-spacing">
                <div className="container-custom text-center">
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-xs md:text-sm text-warm-700 tracking-wider uppercase font-medium mb-4"
                    >
                        Our Story
                    </motion.p>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="font-display text-4xl md:text-5xl lg:text-6xl text-warm-800 mb-6"
                    >
                        About Sunil Fetawale
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-lg md:text-xl text-warm-600 max-w-2xl mx-auto"
                    >
                        Three generations of craftsmanship dedicated to making your special day perfect.
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="section-spacing">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="prose prose-lg prose-warm mx-auto"
                        >
                            <p className="text-warm-700 leading-relaxed mb-6">
                                <span className="float-left text-6xl font-serif text-maroon-600 mr-3 mt-1 leading-none">F</span>
                                or over three decades, the Fetawale family has been crafting exquisite wedding accessories
                                that blend traditional Maharashtrian artistry with contemporary elegance. What started as
                                a small workshop in Maharashtra has grown into a trusted name for brides, grooms, and
                                families across India.
                            </p>
                            <p className="text-warm-700 leading-relaxed mb-6">
                                Every piece we create tells a story — from the intricate embroidery on bridal ghunghats
                                to the precise measurements of groom's phetas. We understand that your wedding day is
                                one of the most important days of your life, and we're honored to be a part of it.
                            </p>
                            <p className="text-warm-700 leading-relaxed mb-6">
                                Our commitment to quality means we use only premium materials, and our custom measurement
                                service ensures a perfect fit every time. Whether you're looking for a traditional Puneri
                                pheta or a contemporary bridal dupatta, we craft each piece with the same dedication
                                and attention to detail.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-warm-50 border-y border-warm-200/40 section-spacing">
                <div className="container-custom">
                    <h2 className="font-serif text-3xl md:text-4xl text-warm-800 text-center mb-12">
                        Our Values
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                title: 'Craftsmanship',
                                description: 'Every stitch, every fold, every detail is crafted with precision and care.',
                                icon: '✂️'
                            },
                            {
                                title: 'Tradition',
                                description: 'We honor centuries-old techniques while embracing modern aesthetics.',
                                icon: '🙏'
                            },
                            {
                                title: 'Personalization',
                                description: 'Custom measurements and designs tailored to your unique style.',
                                icon: '📏'
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                                }}
                                className="text-center p-6"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="font-serif text-xl text-warm-800 mb-2">{value.title}</h3>
                                <p className="text-warm-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-spacing">
                <div className="container-custom text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-warm-800 mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-lg text-warm-600 mb-8 max-w-xl mx-auto">
                        Let us help you find the perfect accessories for your special day.
                    </p>
                    <a
                        href="https://wa.me/917020708747?text=Hi, I'd like to know more about your products."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-8 py-4 bg-maroon-600 text-white rounded-lg font-medium hover:bg-maroon-700 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span>Contact Us on WhatsApp</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

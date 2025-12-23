'use client'

import { useCart } from '@/context/CartContext'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function CartDrawer() {
    const { cart, isOpen, setIsOpen, toggleCart, removeFromCart, clearCart } = useCart()

    // Calculate WhatsApp Message
    const getWhatsAppLink = () => {
        const phone = '917020708747'
        let text = "Hi Sunil Phetawale, I am interested in inquiring about the following products:%0A%0A"

        cart.forEach((item, index) => {
            text += `${index + 1}. *${item.title}* (Code: ${item.code})%0A`
            text += `   Link: https://sunilphetawale.com/products/${item.slug}%0A%0A`
        })

        text += "Please let me know the pricing and availability."
        return `https://wa.me/${phone}?text=${text}`
    }

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={toggleCart}
                className="fixed bottom-6 right-6 z-50 bg-maroon-600 text-white p-4 rounded-full shadow-lg hover:bg-maroon-700 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
            >
                <div className="relative">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-gold-400 text-maroon-900 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                            {cart.length}
                        </span>
                    )}
                </div>
                <span className="font-medium pr-1 hidden group-hover:inline-block transition-all max-w-0 group-hover:max-w-[100px] overflow-hidden whitespace-nowrap">
                    My Inquiry
                </span>
            </button>

            {/* Backdrop & Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-warm-100 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
                                <div>
                                    <h2 className="font-serif text-2xl text-warm-900">Your Inquiry</h2>
                                    <p className="text-sm text-warm-500 mt-1">{cart.length} items selected</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    {cart.length > 0 && (
                                        <button
                                            onClick={clearCart}
                                            className="text-xs text-warm-400 hover:text-red-500 font-medium px-3 py-1.5 rounded-full hover:bg-red-50 transition-colors"
                                        >
                                            Clear All
                                        </button>
                                    )}
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-warm-400 hover:text-maroon-600 transition-colors rounded-full hover:bg-warm-100"
                                    >
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Cart Items */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                {cart.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center">
                                        <div className="w-20 h-20 bg-warm-50 rounded-full flex items-center justify-center mb-6 text-warm-300">
                                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-serif text-warm-900 mb-2">Your list is empty</h3>
                                        <p className="text-warm-500 mb-8 max-w-[200px] leading-relaxed">Browse products and add them here to send a bulk inquiry.</p>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="px-6 py-3 bg-warm-100 text-warm-800 rounded-lg font-medium hover:bg-warm-200 transition-colors"
                                        >
                                            Browse Products
                                        </button>
                                    </div>
                                ) : (
                                    cart.map((item) => (
                                        <motion.div
                                            key={item._id}
                                            layout
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                            className="group flex gap-4 p-4 bg-white border border-warm-100 rounded-2xl hover:border-maroon-200 hover:shadow-md transition-all relative"
                                        >
                                            <div className="relative w-24 h-24 bg-warm-50 rounded-xl overflow-hidden flex-shrink-0 border border-warm-100">
                                                {item.image ? (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-xs text-warm-300 font-mono">
                                                        {item.code}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between py-1">
                                                <div>
                                                    <div className="flex justify-between items-start">
                                                        <h3 className="font-medium text-warm-900 line-clamp-1 pr-6">
                                                            {item.title}
                                                        </h3>
                                                        <button
                                                            onClick={() => removeFromCart(item._id)}
                                                            className="text-warm-400 hover:text-red-500 transition-colors p-1"
                                                            title="Remove Item"
                                                        >
                                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <p className="text-xs font-mono text-maroon-600 mt-1 bg-maroon-50 inline-block px-2 py-0.5 rounded">
                                                        {item.code}
                                                    </p>
                                                </div>

                                                <Link
                                                    href={`/products/${item.slug}`}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-xs text-warm-500 hover:text-maroon-600 hover:underline flex items-center gap-1 mt-2"
                                                >
                                                    View Details
                                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))
                                )}
                            </div>

                            {/* Footer Actions */}
                            {cart.length > 0 && (
                                <div className="p-5 border-t border-warm-100 bg-warm-50">
                                    <div className="mb-4 text-sm text-warm-600 text-center">
                                        Ready to inquire about these {cart.length} items?
                                    </div>
                                    <a
                                        href={getWhatsAppLink()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-xl font-medium hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Send Inquiry on WhatsApp
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

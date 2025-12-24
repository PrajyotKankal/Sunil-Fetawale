'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const VISITOR_KEY = 'sunil_fetawale_visitor'

export default function WelcomeBack() {
    const [showGreeting, setShowGreeting] = useState(false)
    const [isReturning, setIsReturning] = useState(false)

    useEffect(() => {
        // Check if returning visitor
        const hasVisited = localStorage.getItem(VISITOR_KEY)

        if (hasVisited) {
            setIsReturning(true)
            setShowGreeting(true)

            // Auto-hide after 4 seconds
            const timer = setTimeout(() => {
                setShowGreeting(false)
            }, 4000)

            return () => clearTimeout(timer)
        } else {
            // Mark as visited
            localStorage.setItem(VISITOR_KEY, Date.now().toString())
        }
    }, [])

    if (!isReturning) return null

    return (
        <AnimatePresence>
            {showGreeting && (
                <motion.div
                    initial={{ opacity: 0, y: -20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed top-20 right-4 z-50"
                >
                    <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-2xl px-5 py-4 border border-warm-200 flex items-center gap-3 max-w-xs">
                        <div className="w-10 h-10 bg-gradient-to-br from-maroon-500 to-maroon-700 rounded-full flex items-center justify-center text-white text-lg">
                            👋
                        </div>
                        <div>
                            <p className="text-sm font-medium text-warm-900">Welcome back!</p>
                            <p className="text-xs text-warm-600">Good to see you again</p>
                        </div>
                        <button
                            onClick={() => setShowGreeting(false)}
                            className="ml-2 text-warm-400 hover:text-warm-600 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

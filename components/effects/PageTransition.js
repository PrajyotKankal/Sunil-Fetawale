'use client'

import { motion } from 'framer-motion'

// Page transition wrapper - wraps page content with fade transitions
export default function PageTransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
            }}
        >
            {children}
        </motion.div>
    )
}

// Fade only transition (no movement)
export function FadeTransition({ children, duration = 0.3 }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration }}
        >
            {children}
        </motion.div>
    )
}

// Slide up transition
export function SlideUpTransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
            }}
        >
            {children}
        </motion.div>
    )
}

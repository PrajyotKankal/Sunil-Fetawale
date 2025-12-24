'use client'

import { motion } from 'framer-motion'

// Magnetic button effect - pulls button towards cursor on hover
export default function MagneticButton({
    children,
    className = '',
    strength = 0.3,
    ...props
}) {
    const handleMouseMove = (e) => {
        const button = e.currentTarget
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        button.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'translate(0, 0)'
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`inline-block transition-transform duration-300 ease-out ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    )
}

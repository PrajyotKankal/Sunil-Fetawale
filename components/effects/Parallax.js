'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxSection({
    children,
    className = '',
    speed = 0.3,  // How much slower the background moves (0.3 = 30% of scroll speed)
    direction = 'up' // 'up' or 'down'
}) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const multiplier = direction === 'up' ? -1 : 1
    const y = useTransform(scrollYProgress, [0, 1], [multiplier * 100 * speed, multiplier * -100 * speed])

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y }} className="relative">
                {children}
            </motion.div>
        </div>
    )
}

// Parallax Background that moves opposite to scroll
export function ParallaxBackground({
    children,
    className = '',
    intensity = 50
}) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity])

    return (
        <div ref={ref} className={`relative ${className}`}>
            <motion.div
                style={{ y }}
                className="absolute inset-0 -z-10"
            >
                {/* Background content goes here */}
            </motion.div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PageLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-ivory-50 flex flex-col items-center justify-center"
        >
            {/* Animated Logo */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
            >
                <motion.div
                    animate={{
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-24 h-24 md:w-32 md:h-32 relative"
                >
                    <Image
                        src="/logo-512.png"
                        alt="Sunil Fetawale"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="font-serif text-xl md:text-2xl text-warm-800 mt-6"
            >
                Sunil Fetawale
            </motion.h1>

            {/* Loading Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex space-x-2"
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                        className="w-2 h-2 bg-maroon-600 rounded-full"
                    />
                ))}
            </motion.div>
        </motion.div>
    )
}

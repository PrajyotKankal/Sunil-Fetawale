'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application error:', error)
    }, [error])

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
            {/* Icon */}
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>

            {/* Message */}
            <h2 className="font-serif text-2xl md:text-3xl text-warm-800 mb-4">
                Something went wrong
            </h2>
            <p className="text-warm-600 max-w-md mb-8">
                We apologize for the inconvenience. Please try again or contact us if the problem persists.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => reset()}
                    className="px-8 py-3 bg-maroon-600 text-white rounded-lg font-medium hover:bg-maroon-700 transition-colors"
                >
                    Try Again
                </button>
                <Link
                    href="/"
                    className="px-8 py-3 bg-warm-100 text-warm-800 rounded-lg font-medium hover:bg-warm-200 transition-colors"
                >
                    Go Home
                </Link>
            </div>

            {/* Contact */}
            <p className="mt-12 text-sm text-warm-500">
                Need help? <a href="https://wa.me/917020708747" className="text-maroon-600 hover:underline">Contact us on WhatsApp</a>
            </p>
        </div>
    )
}

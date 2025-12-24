import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
            {/* Large 404 */}
            <h1 className="font-display text-8xl md:text-9xl text-warm-200 font-bold mb-4">
                404
            </h1>

            {/* Message */}
            <h2 className="font-serif text-2xl md:text-3xl text-warm-800 mb-4">
                Page Not Found
            </h2>
            <p className="text-warm-600 max-w-md mb-8">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="px-8 py-3 bg-maroon-600 text-white rounded-lg font-medium hover:bg-maroon-700 transition-colors"
                >
                    Go Home
                </Link>
                <Link
                    href="/products"
                    className="px-8 py-3 bg-warm-100 text-warm-800 rounded-lg font-medium hover:bg-warm-200 transition-colors"
                >
                    Browse Products
                </Link>
            </div>

            {/* Contact */}
            <p className="mt-12 text-sm text-warm-500">
                Need help? <a href="https://wa.me/917020708747" className="text-maroon-600 hover:underline">Contact us on WhatsApp</a>
            </p>
        </div>
    )
}

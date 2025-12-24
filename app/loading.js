export default function Loading() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
            {/* Animated Logo Placeholder */}
            <div className="relative">
                <div className="w-16 h-16 border-4 border-warm-200 border-t-maroon-600 rounded-full animate-spin"></div>
            </div>

            {/* Loading Text */}
            <p className="mt-6 text-warm-600 animate-pulse">Loading...</p>
        </div>
    )
}

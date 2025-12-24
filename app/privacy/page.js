import Link from 'next/link'

export const metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Sunil Fetawale. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <section className="bg-warm-50 border-b border-warm-200/50 py-16 md:py-20">
                <div className="container-custom text-center">
                    <h1 className="font-display text-4xl md:text-5xl text-warm-800 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-warm-600">
                        Last updated: December 24, 2024
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 md:py-16">
                <div className="container-custom max-w-3xl">
                    <div className="prose prose-warm max-w-none">
                        <h2 className="font-serif text-2xl text-warm-800 mb-4">1. Information We Collect</h2>
                        <p className="text-warm-700 mb-6">
                            When you use our website or contact us, we may collect the following information:
                        </p>
                        <ul className="list-disc list-inside text-warm-700 mb-8 space-y-2">
                            <li>Contact information (name, phone number, email address)</li>
                            <li>Measurement details for custom orders</li>
                            <li>Delivery address</li>
                            <li>Order history and preferences</li>
                            <li>Communication history via WhatsApp or other channels</li>
                        </ul>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">2. How We Use Your Information</h2>
                        <p className="text-warm-700 mb-6">
                            We use your information to:
                        </p>
                        <ul className="list-disc list-inside text-warm-700 mb-8 space-y-2">
                            <li>Process and fulfill your orders</li>
                            <li>Communicate with you about your orders</li>
                            <li>Provide customer support</li>
                            <li>Improve our products and services</li>
                            <li>Send updates about new products (with your consent)</li>
                        </ul>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">3. Information Sharing</h2>
                        <p className="text-warm-700 mb-8">
                            We do not sell, trade, or rent your personal information to third parties.
                            We may share information with delivery partners solely for the purpose of
                            fulfilling your orders.
                        </p>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">4. Data Security</h2>
                        <p className="text-warm-700 mb-8">
                            We implement appropriate security measures to protect your personal information
                            from unauthorized access, alteration, disclosure, or destruction. However, no
                            method of transmission over the Internet is 100% secure.
                        </p>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">5. Your Rights</h2>
                        <p className="text-warm-700 mb-8">
                            You have the right to access, update, or delete your personal information.
                            Contact us on WhatsApp to make such requests.
                        </p>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">6. Cookies</h2>
                        <p className="text-warm-700 mb-8">
                            Our website uses cookies to enhance your browsing experience. These are used
                            to remember your preferences and improve site functionality.
                        </p>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">7. Contact Us</h2>
                        <p className="text-warm-700 mb-4">
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <ul className="text-warm-700 mb-8 space-y-2">
                            <li>WhatsApp: <a href="https://wa.me/917020708747" className="text-maroon-600 hover:underline">+91 7020708747</a></li>
                            <li>Address: Maharashtra, India</li>
                        </ul>

                        <div className="mt-12 pt-8 border-t border-warm-200">
                            <Link href="/" className="text-maroon-600 hover:underline">
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

import Link from 'next/link'

export const metadata = {
    title: 'Terms & Conditions',
    description: 'Terms and Conditions for using Sunil Fetawale website and services. Read about ordering, payments, refunds, and more.',
}

export default function TermsPage() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <section className="bg-warm-50 border-b border-warm-200/50 py-16 md:py-20">
                <div className="container-custom text-center">
                    <h1 className="font-display text-4xl md:text-5xl text-warm-800 mb-4">
                        Terms & Conditions
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
                        <h2 className="font-serif text-2xl text-warm-800 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-warm-700 mb-8">
                            By accessing and using this website, you accept and agree to be bound by these
                            Terms and Conditions. If you do not agree to these terms, please do not use our website.
                        </p>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">2. Products and Services</h2>
                        <p className="text-warm-700 mb-8">
                            We offer handcrafted wedding accessories including phetas, ghunghats, dupattas,
                            and related items. Product descriptions and images are provided for reference.
                            Actual products may vary slightly due to the handmade nature of our items.
                        </p>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">3. Ordering and Payments</h2>
                        <ul className="list-disc list-inside text-warm-700 mb-8 space-y-2">
                            <li>Orders are placed via WhatsApp communication</li>
                            <li>Prices are quoted in Indian Rupees (INR)</li>
                            <li>Custom orders require a 50% advance payment</li>
                            <li>We accept UPI, bank transfers, and select COD locations</li>
                            <li>Orders are confirmed only after receipt of advance payment</li>
                        </ul>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">4. Custom Orders</h2>
                        <p className="text-warm-700 mb-8">
                            Custom orders are made specifically to your measurements and specifications.
                            Please provide accurate measurements as we cannot accept returns for sizing
                            issues caused by incorrect measurements provided by the customer.
                        </p>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">5. Shipping and Delivery</h2>
                        <ul className="list-disc list-inside text-warm-700 mb-8 space-y-2">
                            <li>We ship across India</li>
                            <li>Delivery typically takes 3-7 business days</li>
                            <li>Shipping charges are calculated based on location</li>
                            <li>Risk of loss transfers to customer upon delivery</li>
                        </ul>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">6. Returns and Refunds</h2>
                        <p className="text-warm-700 mb-4">Due to the custom nature of our products:</p>
                        <ul className="list-disc list-inside text-warm-700 mb-8 space-y-2">
                            <li>Custom-made items cannot be returned</li>
                            <li>Exchanges only for manufacturing defects</li>
                            <li>Report any defects within 48 hours of delivery</li>
                            <li>Refunds are processed within 7-10 business days</li>
                        </ul>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">7. Intellectual Property</h2>
                        <p className="text-warm-700 mb-8">
                            All content on this website including images, designs, and text are the property
                            of Sunil Fetawale and are protected by copyright laws. You may not reproduce or
                            distribute our content without written permission.
                        </p>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">8. Limitation of Liability</h2>
                        <p className="text-warm-700 mb-8">
                            We are not liable for any indirect, incidental, or consequential damages arising
                            from your use of our products or services. Our liability is limited to the
                            purchase price of the product.
                        </p>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">9. Changes to Terms</h2>
                        <p className="text-warm-700 mb-8">
                            We reserve the right to modify these terms at any time. Changes will be posted
                            on this page with an updated date. Continued use of the website constitutes
                            acceptance of modified terms.
                        </p>

                        <h2 className="font-serif text-2xl text-warm-800 mb-4">10. Contact</h2>
                        <p className="text-warm-700 mb-4">
                            For questions about these Terms, please contact us:
                        </p>
                        <ul className="text-warm-700 mb-8 space-y-2">
                            <li>WhatsApp: <a href="https://wa.me/917020708747" className="text-maroon-600 hover:underline">+91 7020708747</a></li>
                            <li>Location: Maharashtra, India</li>
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

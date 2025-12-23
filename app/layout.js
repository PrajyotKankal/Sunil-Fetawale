import { Inter, Cormorant_Garamond, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Font configurations
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-inter',
    display: 'swap',
})

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-cormorant',
    display: 'swap',
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-playfair',
    display: 'swap',
})

// Metadata for SEO
export const metadata = {
    title: {
        default: 'Bridal Ghunghat & Wedding Dupatta | Sunil Phetawale - Custom Wedding Accessories',
        template: '%s | Sunil Phetawale',
    },
    description: 'Premium bridal ghunghats, groom shawls, and baraat accessories. Handcrafted wedding dupattas made to match your attire. Custom sizes available. Shop traditional Indian wedding wear from Maharashtra.',
    keywords: [
        // Core Products & Variations
        'Pheta', 'Feta', 'Feta Turbans', 'Marathi Pheta', 'Puneri Pheta', 'Kolhapuri Pheta',
        'Pagadi', 'Pagdi', 'Royal Pagadi', 'Wedding Pagdi', 'Dulha Pagadi',
        // Bridal & Groom
        'Bridal Ghunghat', 'Wedding Dupatta', 'Groom Shawls',
        'Baraat Accessories', 'Dulhan Ghunghat', 'Dulha Shawl',
        // Specific Styles
        'Mawla Pheta', 'Shahi Pheta', 'Peshwai Feta',
        // Location & Attributes
        'Sunil Phetawale', 'Sunil Fetawale',
        'Wedding Accessories Maharashtra', 'Custom Feta Online',
        'Handmade Pagadi India', 'Traditional Wedding Turban'
    ],
    authors: [{ name: 'Sunil Phetawale' }],
    creator: 'Sunil Phetawale',
    publisher: 'Sunil Phetawale',
    metadataBase: new URL('https://sunilphetawale.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://sunilphetawale.com',
        title: 'Bridal Ghunghat & Wedding Dupatta | Sunil Phetawale',
        description: 'Premium handcrafted bridal ghunghats, groom shawls, and baraat accessories. Custom wedding wear from Maharashtra, India.',
        siteName: 'Sunil Phetawale Wedding Accessories',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Sunil Phetawale - Bridal Ghunghat & Wedding Accessories',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bridal Ghunghat & Wedding Dupatta | Sunil Phetawale',
        description: 'Premium handcrafted bridal ghunghats, groom shawls, and baraat accessories.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        // Add these after setting up Google Search Console
        // google: 'your-google-verification-code',
    },
    category: 'Wedding Accessories',
    icons: {
        icon: '/favicon.png',
        apple: '/favicon.png',
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Sunil Fetawale',
    },
}

// Viewport configuration (Next.js 15 requires separate export)
export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#FEFDFB' },
        { media: '(prefers-color-scheme: dark)', color: '#292524' },
    ],
}

import { CartProvider } from '@/context/CartContext'
import CartDrawer from '@/components/layout/CartDrawer'

// ... (Metadata export remains unchanged)

export default function RootLayout({ children }) {
    // JSON-LD Structured Data for SEO
    const structuredData = { /* ... */ }

    return (
        <html
            lang="en"
            className={`${inter.variable} ${cormorant.variable} ${playfair.variable}`}
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </head>
            <body className="min-h-screen flex flex-col bg-ivory-50 text-warm-800 antialiased">
                <CartProvider>
                    {/* Header */}
                    <Header />

                    {/* Main Content */}
                    <main className="flex-1">
                        {children}
                    </main>

                    {/* Footer */}
                    <Footer />

                    {/* Global Cart Drawer */}
                    <CartDrawer />
                </CartProvider>
            </body>
        </html>
    )
}


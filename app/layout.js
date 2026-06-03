import { Inter, Cormorant_Garamond, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CartProvider } from '@/context/CartContext'
import CartDrawer from '@/components/layout/CartDrawer'
import WelcomeBack from '@/components/common/WelcomeBack'
import GoogleAnalytics from '@/components/common/GoogleAnalytics'
import SmoothScroll from '@/components/providers/SmoothScroll'

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
        default: 'Sunil Collection | Since 1981 · Bridal Ghunghat & Custom Pheta in Latur',
        template: '%s | Sunil Collection — Est. 1981, Latur Maharashtra',
    },
    description: 'Sunil Collection — Est. 1981. Latur, Maharashtra\'s most trusted wedding accessories specialist for 45 years. Custom handcrafted bridal ghunghat, groom pheta (feta), wedding dupatta and baraat accessories. Made to your exact measurements. Order via WhatsApp: +91 7020708747. Pan-India delivery.',
    keywords: [
        // Brand names — all spellings
        'Sunil Collection', 'Sunil Phetawale', 'Sunil Fetawale', 'Sunil Feta', 'Sunil Pheta', 'sunilcollection',
        // Pheta / Feta — ALL spelling variants
        'Pheta', 'Feta', 'Feto', 'Phet', 'Fetta', 'Fhetawale', 'Fetawale', 'Phetawale',
        'Marathi Pheta', 'Puneri Pheta', 'Kolhapuri Pheta', 'Mawla Pheta', 'Shahi Pheta', 'Peshwai Feta',
        'Pagadi', 'Pagdi', 'Pagri', 'Safa', 'Sela', 'Shela', 'Sehra',
        'Groom Turban', 'Wedding Turban', 'Dulha Pagdi', 'Dulha Pheta', 'Dastar', 'Safa Pagdi',
        'Custom Pheta Latur', 'Custom Feta Maharashtra', 'Pheta Maker Latur',
        // Ghunghat — ALL spelling variants
        'Ghunghat', 'Ghungat', 'Ghunghhat', 'Ghoonjhat', 'Ghoonghut', 'Ghunghut', 'Ghungath',
        'Bridal Ghunghat', 'Dulhan Ghunghat', 'Bride Veil India', 'Wedding Veil Maharashtra',
        'Ghunghat Latur', 'Ghunghat Maharashtra', 'Custom Ghunghat', 'Handmade Ghunghat',
        // Dupatta — ALL spelling variants
        'Dupatta', 'Dupata', 'Dupattta', 'Duppatta', 'Dupata',
        'Wedding Dupatta', 'Bridal Dupatta', 'Groom Dupatta', 'Dulha Dupatta', 'Dulhan Dupatta',
        'Custom Dupatta', 'Embroidered Dupatta', 'Wedding Shawl',
        // Products
        'Wedding Accessories', 'Baraat Accessories', 'Wedding Wear', 'Bridal Accessories',
        'Indian Wedding Accessories', 'Traditional Wedding Wear Maharashtra', 'Vivah Accessories',
        'Lagna Accessories', 'Marathi Wedding Wear', 'Hindu Wedding Accessories',
        // Latur — hyper-local
        'Latur', 'Latur Maharashtra', 'Latur Wedding', 'Latur Wedding Shop',
        'Pheta Latur', 'Feta Latur', 'Ghunghat Latur', 'Dupatta Latur',
        'Wedding Accessories Latur', 'Bridal Shop Latur', 'Custom Wedding Latur',
        // Latur District cities
        'Nilanga Wedding', 'Udgir Wedding', 'Ausa Wedding', 'Chakur Wedding', 'Ahmadpur Wedding',
        // Nearby cities / districts
        'Osmanabad Wedding Accessories', 'Nanded Wedding Accessories', 'Nanded Pheta',
        'Solapur Wedding Shop', 'Solapur Ghunghat', 'Bidar Wedding Accessories',
        'Gulbarga Wedding', 'Raichur Wedding', 'Yadgir Wedding',
        'Aurangabad Wedding Accessories', 'Aurangabad Pheta',
        'Pune Wedding Accessories', 'Pune Pheta', 'Pune Ghunghat',
        'Mumbai Wedding Accessories', 'Nashik Wedding', 'Nagpur Wedding Accessories',
        'Kolhapur Wedding', 'Sangli Wedding', 'Satara Wedding',
        'Jalna Wedding', 'Parbhani Wedding', 'Hingoli Wedding',
        // Maharashtra general
        'Maharashtra Wedding Accessories', 'Maharashtra Wedding Shop', 'Maharashtra Pheta',
        'Maharashtra Ghunghat', 'Maharashtra Custom Wedding',
        // Order types
        'Custom Feta Online', 'Custom Pheta Order', 'Online Wedding Accessories India',
        'Handmade Pagadi India', 'Traditional Wedding Turban India', 'Buy Ghunghat Online',
        // Delivery
        'Wedding Accessories Home Delivery', 'Pan India Wedding Delivery', 'WhatsApp Wedding Order'
    ],
    authors: [{ name: 'Sunil Collection' }],
    creator: 'Sunil Collection',
    publisher: 'Sunil Collection',
    metadataBase: new URL('https://sunilfetawale.vercel.app'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://sunilfetawale.vercel.app',
        title: 'Sunil Collection | Bridal Ghunghat & Wedding Accessories',
        description: 'Premium handcrafted bridal ghunghats, groom shawls, and baraat accessories. Custom wedding wear from Maharashtra, India.',
        siteName: 'Sunil Collection',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Sunil Collection - Bridal Ghunghat & Wedding Accessories',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sunil Collection | Bridal Ghunghat & Wedding Accessories',
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
        icon: '/pwa-icon.jpg',
        apple: '/pwa-icon.jpg',
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'Sunil Collection',
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





export default function RootLayout({ children }) {
    // JSON-LD Structured Data — comprehensive local business + FAQ + WebSite schemas
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': ['LocalBusiness', 'Store', 'ClothingStore'],
                '@id': 'https://sunilfetawale.vercel.app/#business',
                'name': 'Sunil Collection',
                'alternateName': ['Sunil Fetawale', 'Sunil Phetawale', 'Sunil Feta Collection'],
                'description': 'Custom handcrafted bridal ghunghat, groom pheta (feta), wedding dupatta, and baraat accessories from Latur, Maharashtra. Established in 1981 — 45 years of craftsmanship. Made to exact measurements. Pan-India delivery.',
                'foundingDate': '1981',
                'slogan': 'Handcrafted with tradition since 1981',
                'url': 'https://sunilfetawale.vercel.app',
                'telephone': '+91-7020708747',
                'image': 'https://sunilfetawale.vercel.app/pwa-icon.jpg',
                'logo': 'https://sunilfetawale.vercel.app/pwa-icon.jpg',
                'priceRange': '₹₹',
                'currenciesAccepted': 'INR',
                'paymentAccepted': 'Cash, UPI, Bank Transfer, WhatsApp Pay',
                'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': 'Latur',
                    'addressLocality': 'Latur',
                    'addressRegion': 'Maharashtra',
                    'postalCode': '413512',
                    'addressCountry': 'IN'
                },
                'geo': {
                    '@type': 'GeoCoordinates',
                    'latitude': '18.4088',
                    'longitude': '76.5604'
                },
                'openingHoursSpecification': [
                    {
                        '@type': 'OpeningHoursSpecification',
                        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                        'opens': '09:00',
                        'closes': '20:00'
                    }
                ],
                'areaServed': [
                    { '@type': 'City', 'name': 'Latur' },
                    { '@type': 'City', 'name': 'Osmanabad' },
                    { '@type': 'City', 'name': 'Nanded' },
                    { '@type': 'City', 'name': 'Solapur' },
                    { '@type': 'City', 'name': 'Aurangabad' },
                    { '@type': 'City', 'name': 'Pune' },
                    { '@type': 'City', 'name': 'Mumbai' },
                    { '@type': 'City', 'name': 'Nagpur' },
                    { '@type': 'State', 'name': 'Maharashtra' },
                    { '@type': 'Country', 'name': 'India' }
                ],
                'hasMap': 'https://maps.google.com/?q=Latur,Maharashtra,India',
                'contactPoint': {
                    '@type': 'ContactPoint',
                    'telephone': '+91-7020708747',
                    'contactType': 'customer service',
                    'availableLanguage': ['English', 'Hindi', 'Marathi'],
                    'contactOption': 'TollFree'
                },
                'knowsAbout': [
                    'Bridal Ghunghat', 'Groom Pheta', 'Wedding Feta', 'Wedding Dupatta',
                    'Baraat Accessories', 'Puneri Pheta', 'Marathi Wedding Wear',
                    'Custom Wedding Accessories', 'Traditional Indian Wedding'
                ],
                'offers': {
                    '@type': 'AggregateOffer',
                    'priceCurrency': 'INR',
                    'availability': 'https://schema.org/InStock',
                    'itemOffered': [
                        { '@type': 'Product', 'name': 'Bridal Ghunghat', 'description': 'Custom handcrafted bridal ghunghat with traditional embroidery' },
                        { '@type': 'Product', 'name': 'Groom Pheta (Feta)', 'description': 'Traditional Maharashtrian groom pheta custom made to exact head measurement' },
                        { '@type': 'Product', 'name': 'Wedding Dupatta', 'description': 'Custom wedding dupattas for bride and groom' },
                        { '@type': 'Product', 'name': 'Baraat Accessories', 'description': 'Complete baraat accessories set for wedding procession' }
                    ]
                }
            },
            {
                '@type': 'WebSite',
                '@id': 'https://sunilfetawale.vercel.app/#website',
                'url': 'https://sunilfetawale.vercel.app',
                'name': 'Sunil Collection',
                'description': 'Premium Indian wedding accessories from Latur, Maharashtra',
                'inLanguage': ['en', 'hi', 'mr'],
                'potentialAction': {
                    '@type': 'SearchAction',
                    'target': {
                        '@type': 'EntryPoint',
                        'urlTemplate': 'https://sunilfetawale.vercel.app/products?q={search_term_string}'
                    },
                    'query-input': 'required name=search_term_string'
                }
            },
            {
                '@type': 'Organization',
                '@id': 'https://sunilfetawale.vercel.app/#organization',
                'name': 'Sunil Collection',
                'alternateName': ['Sunil Fetawale', 'Sunil Phetawale'],
                'url': 'https://sunilfetawale.vercel.app',
                'logo': 'https://sunilfetawale.vercel.app/pwa-icon.jpg',
                'contactPoint': {
                    '@type': 'ContactPoint',
                    'telephone': '+91-7020708747',
                    'contactType': 'customer service',
                    'availableLanguage': ['English', 'Hindi', 'Marathi']
                },
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Latur',
                    'addressRegion': 'Maharashtra',
                    'addressCountry': 'IN'
                }
            },
            {
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': 'Where can I buy custom pheta or feta in Latur, Maharashtra?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Sunil Collection in Latur, Maharashtra is the leading specialist for custom handcrafted pheta (feta) for grooms. We make phetas to your exact head measurements in all traditional styles including Puneri, Kolhapuri, Mawla, and Shahi pheta. Contact us on WhatsApp at +91 7020708747.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'What is the price of bridal ghunghat in Latur?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Bridal ghunghat prices at Sunil Collection, Latur start from ₹500 and vary based on design, embroidery, and fabric choice. Contact us on WhatsApp at +91 7020708747 for current pricing and customization options.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'Do you deliver wedding accessories outside Latur across Maharashtra?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Yes! Sunil Collection delivers across all of Maharashtra including Osmanabad, Nanded, Solapur, Bidar, Aurangabad, Pune, Mumbai, and Nagpur — and across all of India. Order via WhatsApp for fast delivery.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'How do I order a custom groom pheta (feta) for my wedding?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Simply WhatsApp us at +91 7020708747. Share your head measurement (in inches or cm), preferred colour, fabric, and wedding date. We custom craft each pheta within the agreed timeline and deliver to your door.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'Do you make bride and groom matching wedding accessories?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Yes! We specialize in bride-groom matching combination sets — bridal ghunghat, groom pheta, dupatta, and baraat accessories all coordinated to match your wedding outfit colour and style perfectly.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'What is the difference between feta and pheta?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Feta and pheta are different spellings of the same traditional Maharashtrian groom turban (also called pagadi or safa). Pheta is the correct Marathi spelling. At Sunil Collection, we make all styles of pheta/feta in Latur, Maharashtra.'
                        }
                    }
                ]
            }
        ]
    }

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
                <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID || 'G-QVW30LHXDS'} />
                <SmoothScroll>
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

                        {/* Welcome Back Greeting for Returning Visitors */}
                        <WelcomeBack />
                    </CartProvider>
                </SmoothScroll>
            </body>
        </html>
    )
}


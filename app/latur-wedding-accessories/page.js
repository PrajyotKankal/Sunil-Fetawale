import Link from 'next/link'

export const metadata = {
    title: 'Pheta, Ghunghat & Wedding Accessories in Latur, Maharashtra | Sunil Collection',
    description: 'Buy custom bridal ghunghat, groom pheta (feta), wedding dupatta and baraat accessories in Latur, Maharashtra. Sunil Collection — trusted by 5000+ families. WhatsApp: +91 7020708747. Delivery to Osmanabad, Nanded, Solapur and all of Maharashtra.',
    keywords: [
        'Pheta Latur', 'Feta Latur', 'Ghunghat Latur', 'Dupatta Latur',
        'Wedding Accessories Latur', 'Bridal Shop Latur', 'Wedding Shop Latur Maharashtra',
        'Custom Pheta Latur', 'Custom Feta Latur', 'Custom Ghunghat Latur',
        'Groom Pheta Latur', 'Bridal Ghunghat Latur', 'Wedding Dupatta Latur',
        'Osmanabad Wedding', 'Nanded Wedding', 'Solapur Wedding', 'Bidar Wedding',
        'Pheta Maharashtra', 'Feta Maharashtra', 'Ghunghat Maharashtra',
        'Sunil Collection Latur', 'Sunil Fetawale Latur', 'Sunil Phetawale Latur',
    ],
    alternates: {
        canonical: '/latur-wedding-accessories',
    },
    openGraph: {
        title: 'Pheta, Ghunghat & Wedding Accessories in Latur, Maharashtra | Sunil Collection',
        description: 'Custom bridal ghunghat, groom pheta, wedding dupatta from Latur, Maharashtra. Pan-India delivery.',
        type: 'website',
        locale: 'en_IN',
    },
}

const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Pheta, Ghunghat & Wedding Accessories in Latur, Maharashtra',
    'description': 'Custom bridal ghunghat, groom pheta, wedding dupatta from Latur, Maharashtra',
    'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://sunilfetawale.vercel.app' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Latur Wedding Accessories', 'item': 'https://sunilfetawale.vercel.app/latur-wedding-accessories' }
        ]
    }
}

const products = [
    {
        name: 'Custom Groom Pheta / Feta',
        marathi: 'फेटा (Custom Made)',
        desc: 'Made to your exact head measurement. Available in Puneri, Kolhapuri, Mawla, and Shahi styles.',
        popular: true,
    },
    {
        name: 'Bridal Ghunghat',
        marathi: 'घुंघट (Bridal)',
        desc: 'Hand-embroidered bridal ghunghat with traditional motifs. Matched to your lehenga or saree colour.',
        popular: true,
    },
    {
        name: 'Wedding Dupatta',
        marathi: 'दुपट्टा (Wedding)',
        desc: 'Custom dupatta for bride and groom. Coordinated to your wedding attire and colour palette.',
        popular: false,
    },
    {
        name: 'Baraat Accessories Set',
        marathi: 'बारात एक्सेसरीज़',
        desc: 'Complete set for entire baraat — pheta, sela, shawls and more. Bulk order discounts available.',
        popular: false,
    },
]

const cities = [
    'Latur', 'Osmanabad', 'Nanded', 'Solapur', 'Bidar', 'Gulbarga',
    'Aurangabad', 'Pune', 'Mumbai', 'Nashik', 'Nagpur', 'Kolhapur',
    'Sangli', 'Satara', 'Jalna', 'Parbhani', 'Hingoli', 'Nilanga',
    'Udgir', 'Ausa', 'Chakur', 'Ahmadpur', 'Yadgir', 'Raichur',
]

export default function LaturWeddingAccessoriesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
            />

            <div className="min-h-screen bg-ivory-50">

                {/* Breadcrumb */}
                <div className="bg-warm-50 border-b border-warm-200/50 py-4">
                    <div className="container-custom">
                        <nav className="flex items-center space-x-2 text-sm text-warm-600">
                            <Link href="/" className="hover:text-maroon-600 transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-warm-800">Wedding Accessories in Latur</span>
                        </nav>
                    </div>
                </div>

                {/* Hero */}
                <section
                    className="py-16 md:py-24 text-white relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #1A0810 0%, #2D1320 60%, #1A0B08 100%)' }}
                >
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.08) 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                        }}
                    />
                    <div className="container-custom relative z-10 text-center">
                        <p className="font-sans uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'rgba(212,175,55,0.8)' }}>
                            Latur, Maharashtra
                        </p>
                        <h1 className="font-display text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                            Pheta, Ghunghat &amp; Wedding Accessories<br />
                            <span style={{ color: '#D4AF37' }}>in Latur, Maharashtra</span>
                        </h1>
                        <p className="font-sans max-w-2xl mx-auto text-lg mb-4" style={{ color: 'rgba(254,253,251,0.6)' }}>
                            Sunil Collection — Latur&apos;s most trusted custom wedding accessories specialist.
                            Handcrafted pheta (फेटा), ghunghat (घुंघट), dupatta and baraat sets made to your measurements.
                        </p>
                        <p className="font-sans mb-10" style={{ color: 'rgba(254,253,251,0.4)', fontSize: '14px' }}>
                            Also spelled: feta, ghungat, ghunghhat, dupata — we make them all
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://wa.me/917020708747?text=Hi, I need custom wedding accessories from Latur."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 font-sans font-medium text-white rounded-lg transition-all duration-300"
                                style={{ padding: '14px 28px', backgroundColor: '#25D366', fontSize: '15px' }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Order on WhatsApp
                            </a>
                            <Link
                                href="/products"
                                className="inline-flex items-center gap-2 font-sans font-medium text-white rounded-lg transition-all duration-300"
                                style={{ padding: '14px 28px', border: '1px solid rgba(212,175,55,0.4)', fontSize: '15px' }}
                            >
                                Browse Products
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Products */}
                <section className="py-14 md:py-20">
                    <div className="container-custom">
                        <h2 className="font-serif text-3xl md:text-4xl text-warm-800 mb-3 text-center">
                            What We Make in Latur
                        </h2>
                        <p className="text-warm-500 text-center mb-12 max-w-xl mx-auto">
                            All products are 100% custom made to your measurements and specifications.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {products.map((p) => (
                                <div
                                    key={p.name}
                                    className="bg-white rounded-xl p-6 border border-warm-200/60 relative"
                                    style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
                                >
                                    {p.popular && (
                                        <span
                                            className="absolute top-4 right-4 font-sans font-medium rounded-full"
                                            style={{ fontSize: '10px', padding: '3px 10px', backgroundColor: 'rgba(212,175,55,0.15)', color: '#A6861F', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                                        >
                                            Most Popular
                                        </span>
                                    )}
                                    <p className="font-sans text-xs text-warm-400 mb-1" style={{ letterSpacing: '0.05em' }}>{p.marathi}</p>
                                    <h3 className="font-serif text-xl text-warm-800 mb-2">{p.name}</h3>
                                    <p className="font-sans text-warm-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                                    <a
                                        href={`https://wa.me/917020708747?text=Hi, I want to order ${p.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 font-sans font-medium text-sm transition-colors duration-300"
                                        style={{ color: '#7A1F2D' }}
                                    >
                                        <span>Order via WhatsApp →</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Delivery cities */}
                <section className="py-12 bg-warm-50 border-y border-warm-200/40">
                    <div className="container-custom text-center">
                        <h2 className="font-serif text-2xl md:text-3xl text-warm-800 mb-3">
                            We Deliver Across Maharashtra &amp; India
                        </h2>
                        <p className="text-warm-500 mb-8 max-w-xl mx-auto text-sm">
                            Based in Latur, we ship custom wedding accessories to all cities across Maharashtra and India via courier with tracking.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                            {cities.map((city) => (
                                <span
                                    key={city}
                                    className="font-sans text-sm px-3 py-1.5 rounded-full"
                                    style={{
                                        backgroundColor: city === 'Latur' ? 'rgba(139,38,53,0.1)' : 'rgba(255,255,255,0.8)',
                                        color: city === 'Latur' ? '#7A1F2D' : '#78716C',
                                        border: `1px solid ${city === 'Latur' ? 'rgba(139,38,53,0.3)' : 'rgba(231,229,228,0.8)'}`,
                                        fontWeight: city === 'Latur' ? 600 : 400,
                                    }}
                                >
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ for local SEO */}
                <section className="py-14 md:py-20">
                    <div className="container-custom max-w-3xl">
                        <h2 className="font-serif text-3xl text-warm-800 mb-10 text-center">
                            Frequently Asked Questions — Latur
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: 'Where to buy pheta (feta) in Latur, Maharashtra?',
                                    a: 'Sunil Collection is Latur\'s specialist for custom handcrafted pheta (also spelled feta, phet, or pagadi). We take your head measurement and craft the pheta to exact fit in Puneri, Kolhapuri, Mawla, or any traditional style. WhatsApp us at +91 7020708747.'
                                },
                                {
                                    q: 'Where to buy bridal ghunghat (ghungat) in Latur?',
                                    a: 'At Sunil Collection, Latur, we handcraft bridal ghunghat (also spelled ghungat, ghunghhat, or ghoonjhat) with traditional embroidery and beadwork. Matched to your wedding lehenga or saree colour. Starting from ₹500.'
                                },
                                {
                                    q: 'Do you take online orders from Osmanabad, Nanded, Solapur?',
                                    a: 'Yes! We accept WhatsApp orders from anywhere in Maharashtra — Osmanabad, Nanded, Solapur, Bidar, Aurangabad, Pune, Mumbai, Nagpur, and beyond. Share your requirements and measurements via WhatsApp, and we deliver to your door.'
                                },
                                {
                                    q: 'What is the difference between pheta, feta, and pagadi?',
                                    a: 'Pheta (फेटा) is the Marathi term for the traditional groom\'s head covering. Feta is a common alternate spelling. Pagadi (पगडी) is the Hindi term for similar turbans. At Sunil Collection, we make all types under all names — custom made for your wedding in Latur.'
                                },
                            ].map((faq) => (
                                <div key={faq.q} className="bg-white rounded-xl p-6 border border-warm-200/60">
                                    <h3 className="font-serif text-lg text-warm-800 mb-3">{faq.q}</h3>
                                    <p className="font-sans text-warm-600 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section
                    className="py-14 text-center"
                    style={{ backgroundColor: '#FEFDFB', borderTop: '1px solid rgba(231,229,228,0.6)' }}
                >
                    <div className="container-custom max-w-xl">
                        <h2 className="font-serif text-2xl md:text-3xl text-warm-800 mb-4">
                            Ready to Order Your Custom Pheta or Ghunghat?
                        </h2>
                        <p className="text-warm-500 mb-8 text-sm">
                            Contact us on WhatsApp with your head measurement, colour preference, and wedding date.
                            We&apos;ll craft and deliver before your big day.
                        </p>
                        <a
                            href="https://wa.me/917020708747?text=Hi Sunil Collection, I need custom wedding accessories. I am from Latur/Maharashtra."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 font-sans font-medium rounded-lg transition-all duration-300"
                            style={{ padding: '14px 32px', backgroundColor: '#8B2635', color: '#FFFFFF', fontSize: '15px' }}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            WhatsApp: +91 7020708747
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}

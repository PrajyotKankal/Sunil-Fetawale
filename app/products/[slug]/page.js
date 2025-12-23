import ProductDetailClient from '@/components/products/ProductDetailClient'
import { notFound } from 'next/navigation'

// Server Component: Fetches data for SEO tags
export async function generateMetadata({ params }) {
    // Await params if necessary in newer Next.js versions, 
    // but in current stable generic app router usage params is usually just an object.
    const slug = params.slug

    try {
        const product = await getProduct(slug)
        if (!product) return { title: 'Product Not Found' }

        const title = `${product.title} | Sunil Phetawale`
        const description = product.description.substring(0, 160)
        const imageUrl = product.images?.[0]?.url || 'https://sunilphetawale.com/og-image.jpg'

        return {
            title: title,
            description: description,
            openGraph: {
                title: title,
                description: description,
                images: [{ url: imageUrl }],
            },
            twitter: {
                card: 'summary_large_image',
                title: title,
                description: description,
                images: [imageUrl],
            },
        }
    } catch (error) {
        return {
            title: 'Wedding Product | Sunil Phetawale',
            description: 'Exclusive wedding accessories for bride and groom.',
        }
    }
}

// Fetch data on the server
async function getProduct(slug) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/products/${slug}`, {
            next: { revalidate: 60 } // Revalidate every minute
        })
        if (!res.ok) return null
        return res.json()
    } catch (error) {
        console.error('Error fetching product:', error)
        return null
    }
}

export default async function ProductPage({ params }) {
    const slug = params.slug
    const product = await getProduct(slug)

    if (!product) {
        notFound()
    }

    // Add Product Schema for Google Rich Results
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        image: product.images?.[0]?.url,
        description: product.description,
        sku: product.code,
        brand: {
            '@type': 'Brand',
            name: 'Sunil Phetawale'
        },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            price: '0', // Or add price field if available
            priceCurrency: 'INR',
            seller: {
                '@type': 'Organization',
                name: 'Sunil Phetawale'
            }
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProductDetailClient initialProduct={product} />
        </>
    )
}

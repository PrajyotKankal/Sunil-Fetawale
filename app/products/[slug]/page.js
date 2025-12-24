import ProductDetailClient from '@/components/products/ProductDetailClient'
import { notFound } from 'next/navigation'
import { connectToDatabase } from '@/lib/mongodb'
import Product from '@/models/Product'

// Fetch data directly from database (works reliably in production)
async function getProduct(slug) {
    try {
        await connectToDatabase()

        // Try to find by slug first, then by _id
        let product = await Product.findOne({ slug }).lean()
        if (!product && slug.match(/^[0-9a-fA-F]{24}$/)) {
            product = await Product.findById(slug).lean()
        }

        if (!product) return null

        // Convert MongoDB _id to string for serialization
        return JSON.parse(JSON.stringify(product))
    } catch (error) {
        console.error('Error fetching product:', error)
        return null
    }
}

// Generate Static Params for SSG
export async function generateStaticParams() {
    try {
        await connectToDatabase()
        const products = await Product.find({}).select('slug').limit(20).lean() // Limit to recent 20 for build speed, others will fallback

        return products.map((product) => ({
            slug: product.slug,
        }))
    } catch (e) {
        console.error('Error generating static params:', e)
        return []
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params

    try {
        const product = await getProduct(slug)
        if (!product) return { title: 'Product Not Found' }

        const title = `${product.title} | Sunil Phetawale`
        const description = product.description?.substring(0, 160) || 'Premium wedding accessories'
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

export default async function ProductPage({ params }) {
    const { slug } = await params
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

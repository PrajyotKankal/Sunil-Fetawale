import { connectToDatabase } from '@/lib/mongodb'
import Product from '@/models/Product'

export default async function sitemap() {
    const baseUrl = 'https://sunilphetawale.com'

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/wholesale`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]

    // Fetch dynamic product pages directly from DB (works during build time)
    let productPages = []
    try {
        await connectToDatabase()
        const products = await Product.find({}).select('slug updatedAt createdAt').lean()

        productPages = products.map((product) => ({
            url: `${baseUrl}/products/${product.slug}`,
            lastModified: new Date(product.updatedAt || product.createdAt),
            changeFrequency: 'weekly',
            priority: 0.8,
        }))
    } catch (error) {
        console.error('Error fetching products for sitemap:', error)
    }

    return [...staticPages, ...productPages]
}

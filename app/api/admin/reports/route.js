import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import Product from '@/models/Product'
import { isAuthenticated } from '@/lib/auth'

// GET /api/admin/reports - Get reports data (protected)
export async function GET() {
    try {
        // Check authentication
        const authenticated = await isAuthenticated()
        if (!authenticated) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        await connectToDatabase()

        // Get all products with key fields
        const products = await Product.find({})
            .select('code title category colorGroup viewCount featured createdAt images')
            .sort({ createdAt: -1 })
            .lean()

        // Calculate stats
        const stats = {
            total: products.length,
            totalViews: products.reduce((sum, p) => sum + (p.viewCount || 0), 0),
            byCategory: {
                bridal: products.filter(p => p.category === 'bridal').length,
                groom: products.filter(p => p.category === 'groom').length,
                baraat: products.filter(p => p.category === 'baraat').length,
            },
            featured: products.filter(p => p.featured).length,
        }

        // Top 10 most viewed products
        const topViewed = [...products]
            .sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0))
            .slice(0, 10)

        // Recently added (last 10)
        const recentlyAdded = products.slice(0, 10)

        // Products with zero views
        const zeroViews = products.filter(p => !p.viewCount || p.viewCount === 0)

        return NextResponse.json({
            stats,
            topViewed,
            recentlyAdded,
            zeroViews,
            allProducts: products,
        })
    } catch (error) {
        console.error('Reports error:', error)
        return NextResponse.json({ error: 'Failed to fetch reports' }, { status: 500 })
    }
}

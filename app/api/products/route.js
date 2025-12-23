import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import Product from '@/models/Product'
import Counter from '@/models/Counter'
import { isAuthenticated } from '@/lib/auth'

// GET /api/products - List all products
export async function GET(request) {
    try {
        await connectToDatabase()

        const { searchParams } = new URL(request.url)
        const category = searchParams.get('category')
        const featured = searchParams.get('featured')

        let query = {}
        if (category) query.category = category
        if (featured === 'true') query.featured = true

        const products = await Product.find(query)
            .sort({ sortOrder: 1, createdAt: -1 })
            .lean()

        return NextResponse.json(products)
    } catch (error) {
        console.error('GET /api/products error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        )
    }
}

// POST /api/products - Create product (admin only)
export async function POST(request) {
    try {
        const authenticated = await isAuthenticated()
        if (!authenticated) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        await connectToDatabase()

        const data = await request.json()

        // Validate required fields
        const { title, category, colorGroup } = data
        if (!title || !category || !colorGroup) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Auto-generate product code if not provided
        let code = data.code
        if (!code) {
            const prefixMap = {
                'bridal': 'BRD',
                'groom': 'GRM',
                'baraat': 'BRT'
            }
            const prefix = prefixMap[category] || 'PRD'

            // Get next sequence number (never reuses, even after deletion)
            const nextNum = await Counter.getNextSeq(prefix)
            code = `${prefix}-${String(nextNum).padStart(3, '0')}`
        }

        // Check for duplicate code
        const existing = await Product.findOne({ code })
        if (existing) {
            return NextResponse.json(
                { error: 'Product code already exists' },
                { status: 400 }
            )
        }

        const product = await Product.create({ ...data, code })

        return NextResponse.json(product, { status: 201 })
    } catch (error) {
        console.error('POST /api/products error:', error)
        return NextResponse.json(
            { error: 'Failed to create product' },
            { status: 500 }
        )
    }
}

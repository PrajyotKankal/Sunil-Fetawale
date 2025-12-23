import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import Product from '@/models/Product'

// POST /api/products/[id]/view - Increment view count
export async function POST(request, { params }) {
    try {
        await connectToDatabase()

        const { id } = await params

        // Increment view count
        const product = await Product.findByIdAndUpdate(
            id,
            { $inc: { viewCount: 1 } },
            { new: true }
        )

        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 })
        }

        return NextResponse.json({ success: true, viewCount: product.viewCount })
    } catch (error) {
        console.error('View increment error:', error)
        return NextResponse.json({ error: 'Failed to increment view' }, { status: 500 })
    }
}

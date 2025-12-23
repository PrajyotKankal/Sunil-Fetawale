import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import Product from '@/models/Product'
import { isAuthenticated } from '@/lib/auth'
import { deleteImage } from '@/lib/cloudinary'

// GET /api/products/[id] - Get single product by ID or slug
export async function GET(request, { params }) {
    try {
        await connectToDatabase()

        const { id } = await params

        // Try to find by slug first, then by _id
        let product = await Product.findOne({ slug: id }).lean()
        if (!product && id.match(/^[0-9a-fA-F]{24}$/)) {
            product = await Product.findById(id).lean()
        }

        if (!product) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(product)
    } catch (error) {
        console.error('GET /api/products/[id] error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch product' },
            { status: 500 }
        )
    }
}

// PUT /api/products/[id] - Update product (admin only)
export async function PUT(request, { params }) {
    try {
        const authenticated = await isAuthenticated()
        if (!authenticated) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        await connectToDatabase()

        const { id } = await params
        const data = await request.json()

        // Prevent code modification after creation
        delete data.code

        const product = await Product.findByIdAndUpdate(
            id,
            { ...data, updatedAt: new Date() },
            { new: true, runValidators: true }
        )

        if (!product) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(product)
    } catch (error) {
        console.error('PUT /api/products/[id] error:', error)
        return NextResponse.json(
            { error: 'Failed to update product' },
            { status: 500 }
        )
    }
}

// DELETE /api/products/[id] - Delete product (admin only)
export async function DELETE(request, { params }) {
    try {
        const authenticated = await isAuthenticated()
        if (!authenticated) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        await connectToDatabase()

        const { id } = await params
        const product = await Product.findById(id)

        if (!product) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            )
        }

        // Delete images from Cloudinary
        for (const image of product.images) {
            try {
                await deleteImage(image.publicId)
            } catch (err) {
                console.error('Failed to delete image:', image.publicId, err)
            }
        }

        await Product.findByIdAndDelete(id)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('DELETE /api/products/[id] error:', error)
        return NextResponse.json(
            { error: 'Failed to delete product' },
            { status: 500 }
        )
    }
}

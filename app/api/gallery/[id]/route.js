import { NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { connectToDatabase } from '@/lib/mongodb'
import GalleryImage from '@/models/GalleryImage'

// PUT - Update gallery image
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

        const updatedImage = await GalleryImage.findByIdAndUpdate(
            id,
            {
                caption: data.caption,
                sortOrder: data.sortOrder,
                featured: data.featured,
            },
            { new: true }
        )

        if (!updatedImage) {
            return NextResponse.json(
                { error: 'Image not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(updatedImage)
    } catch (error) {
        console.error('Gallery update error:', error)
        return NextResponse.json(
            { error: 'Failed to update gallery image' },
            { status: 500 }
        )
    }
}

// DELETE - Remove gallery image
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

        const deletedImage = await GalleryImage.findByIdAndDelete(id)

        if (!deletedImage) {
            return NextResponse.json(
                { error: 'Image not found' },
                { status: 404 }
            )
        }

        // Note: Cloudinary image should be deleted separately if needed
        // For now, we just remove from database

        return NextResponse.json({ success: true, message: 'Image deleted' })
    } catch (error) {
        console.error('Gallery delete error:', error)
        return NextResponse.json(
            { error: 'Failed to delete gallery image' },
            { status: 500 }
        )
    }
}

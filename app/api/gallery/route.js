import { NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { connectToDatabase } from '@/lib/mongodb'
import GalleryImage from '@/models/GalleryImage'

// GET - Fetch all gallery images (public)
export async function GET() {
    try {
        await connectToDatabase()
        const images = await GalleryImage.find({})
            .sort({ sortOrder: 1, createdAt: -1 })
            .lean()

        return NextResponse.json(images)
    } catch (error) {
        console.error('Gallery fetch error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch gallery images' },
            { status: 500 }
        )
    }
}

// POST - Add new gallery image (admin only)
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

        if (!data.url || !data.publicId) {
            return NextResponse.json(
                { error: 'Image URL and publicId are required' },
                { status: 400 }
            )
        }

        const galleryImage = await GalleryImage.create({
            url: data.url,
            publicId: data.publicId,
            caption: data.caption || '',
            sortOrder: data.sortOrder || 0,
            featured: data.featured || false,
        })

        return NextResponse.json(galleryImage, { status: 201 })
    } catch (error) {
        console.error('Gallery create error:', error)
        return NextResponse.json(
            { error: 'Failed to add gallery image' },
            { status: 500 }
        )
    }
}

import { NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { getUploadSignature } from '@/lib/cloudinary'

export async function POST(request) {
    try {
        const authenticated = await isAuthenticated()
        if (!authenticated) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        const { category } = await request.json()

        if (!category || !['bridal', 'groom', 'baraat'].includes(category)) {
            return NextResponse.json(
                { error: 'Valid category required' },
                { status: 400 }
            )
        }

        const folder = `sunil-fetawale/${category}`
        const signatureData = getUploadSignature(folder)

        return NextResponse.json(signatureData)
    } catch (error) {
        console.error('Upload signature error:', error)
        return NextResponse.json(
            { error: 'Failed to generate upload signature' },
            { status: 500 }
        )
    }
}

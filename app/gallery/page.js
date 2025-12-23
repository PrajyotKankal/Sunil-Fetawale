'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ImageGalleryPage() {
    const images = [
        'IMG_0952.jpg', 'IMG_1072.jpg', 'IMG_1073.jpg', 'IMG_1075.jpg', 'IMG_1077.jpg',
        'IMG_1078.jpg', 'IMG_1090.jpg', 'IMG_1091.jpg', 'IMG_1100.jpg', 'IMG_1101.jpg',
        'IMG_1111.jpg', 'IMG_1165(1).jpg', 'IMG_1168.jpg', 'IMG_1169.jpg', 'IMG_1171.jpg',
        'IMG_1175.jpg', 'IMG_1178.jpg', 'IMG_1179.jpg', 'IMG_1181.jpg', 'IMG_1182.jpg',
        'IMG_1213.jpg', 'IMG_1214.jpg', 'IMG_1217(1).jpg', 'IMG_1220.jpg', 'IMG_1221.jpg',
        'IMG_1222.jpg', 'IMG_3928.jpg', 'photo-output(1).jpg', 'photo-output(2).jpg',
        'photo-output(3).jpg', 'photo-output(4).jpg', 'photo-output(5).jpg',
        'photo-output(6).jpg', 'photo-output(7).jpg', 'photo-output(8).jpg', 'photo-output.jpg',
        'original-0157fa36-5fdc-42ef-a5fc-8272cd169d4c.jpg',
        'original-0eee47bd-51c9-405a-a279-f0c65fbd8794.jpg',
        'original-14309648-800b-42e8-9640-3c4687a60feb.jpg',
        'original-2A0DE750-5FEE-470A-86F8-51FAD807CC54.jpg',
        'original-2f1125ef-aca6-4dc2-8158-ffd94ffbd131.jpg',
        'original-400030bd-7470-4b8e-a3a4-622e0a2ccd14.jpg',
        'original-405a0fda-3493-4869-8697-16fad0f6b4fe.jpg',
        'original-4269ce0c-b326-468b-a246-d6b88a3b86f4.jpg',
        'original-4659cf1e-de5a-420a-9c1b-8fa0af85276e.jpg',
        'original-4eff2d64-cc25-486d-add9-6e3104f50904.jpg',
        'original-517a364e-fd25-44aa-b01e-ee9bf1bd9f3f.jpg',
        'original-5d65c5e1-14c9-4784-b4c2-ead448382210.jpg',
        'original-636291c3-3051-45e7-892b-1047e9ee0578.jpg',
        'original-68702a98-189c-46fc-a315-551a32553c58.jpg',
        'original-6E0CF3FC-614C-4AB1-B640-811DE5169D48.JPG',
        'original-788a9add-e92b-4807-b3bb-7c9f60b4af1d.jpg',
        'original-IMG_3413.JPG', 'original-IMG_9036.JPG', 'original-IMG_9039.JPG',
        'original-IMG_9041.JPG', 'original-e24db9fe-aeea-4b83-be98-95b464dac1a0.jpg',
        'original-eaea35cd-2de3-4874-ac1d-b05d2033ac65.jpg',
        'original-f7aba457-bc3f-4f2c-935c-c5f022b28a00.jpg',
        'original-fea814bc-1e3d-4833-ae86-97dc60912ed4.jpg'
    ];

    return (
        <div className="min-h-screen bg-ivory-50 py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <Link href="/" className="text-maroon-600 hover:text-maroon-700">
                        ← Back to Home
                    </Link>
                    <h1 className="font-display text-4xl text-warm-800 mt-4 mb-2">
                        Product Photo Gallery
                    </h1>
                    <p className="text-warm-600">
                        Browse all {images.length} optimized product photos
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((filename, index) => (
                        <div key={filename} className="bg-white border border-warm-200 rounded-lg overflow-hidden">
                            <div className="relative aspect-square">
                                <Image
                                    src={`/images/products/real/${filename}`}
                                    alt={filename}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-3">
                                <p className="text-xs text-warm-600 font-mono truncate">
                                    {filename}
                                </p>
                                <p className="text-xs text-warm-400 mt-1">
                                    #{index + 1}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        enum: ['bridal', 'groom', 'baraat'],
        required: true,
    },
    colorGroup: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        maxlength: 200,
        default: '',
    },
    images: [{
        url: { type: String, required: true },
        publicId: { type: String, required: true },
    }],
    featured: {
        type: Boolean,
        default: false,
    },
    sortOrder: {
        type: Number,
        default: 0,
    },
    viewCount: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
})

// No middleware - slug is generated in the API route

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)

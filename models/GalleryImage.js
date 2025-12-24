import mongoose from 'mongoose'

const GalleryImageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    publicId: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        maxlength: 200,
        default: '',
    },
    sortOrder: {
        type: Number,
        default: 0,
    },
    featured: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
})

export default mongoose.models.GalleryImage || mongoose.model('GalleryImage', GalleryImageSchema)

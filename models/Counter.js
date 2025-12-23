import mongoose from 'mongoose'

const CounterSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // e.g., 'BRD', 'GRM', 'BRT'
    seq: { type: Number, default: 0 }
})

// Get next sequence number (never resets, even after deletion)
CounterSchema.statics.getNextSeq = async function (prefix) {
    const counter = await this.findByIdAndUpdate(
        prefix,
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    )
    return counter.seq
}

export default mongoose.models.Counter || mongoose.model('Counter', CounterSchema)

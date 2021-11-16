import mongoose from 'mongoose';

const scrapsSchema = mongoose.Schema({
    id: Number,
    wo_id: String,
    scrap_reason_id: Number,
    quantity: Number,
    operator_initials: String,
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    }
});

const scraps = mongoose.model('scraps', scrapsSchema);

export default scraps;
import mongoose from 'mongoose';

const scrapsSchema = mongoose.Schema({
    wo_number: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    scrap_reason_id: {
        type: String,
        required: true
    },
    stage_id: {
        type: Number,
        required: true
    },
    operator_initials: {
        type: String,
        required: true
    },
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
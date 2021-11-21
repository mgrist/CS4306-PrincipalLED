import mongoose from 'mongoose';

const scrapsSchema = mongoose.Schema({
    work_order_id: {
        type: String,
        required: true
    },
    scrap_reason_id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    stage_id: {
        type: String,
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
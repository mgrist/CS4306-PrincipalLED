import mongoose from 'mongoose';

const totalCompletionsSchema = mongoose.Schema({
    wo_id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    stage_id: {
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

const totalCompletions = mongoose.model('totalCompletions', totalCompletionsSchema);

export default totalCompletions;
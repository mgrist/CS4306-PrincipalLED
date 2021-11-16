import mongoose from 'mongoose';

const completionsSchema = mongoose.Schema({
    id: Number,
    wo_id: String,
    quantity: Number,
    operator_initials: String,
    product_id: Number,
    stage_id: Number,
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    }
});

const completions = mongoose.model('completions', completionsSchema);

export default completions;
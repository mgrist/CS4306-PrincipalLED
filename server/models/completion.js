import mongoose from 'mongoose';

const completionsSchema = mongoose.Schema({
    wo_number: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    operator_initials: {
        type: String,
        required: true
    },
    stage_id: {
        type: Number,
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

const completions = mongoose.model('completions', completionsSchema);

export default completions;
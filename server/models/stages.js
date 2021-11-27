import mongoose from 'mongoose';

const stagesSchema = mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    order: {
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

const stages = mongoose.model('stages', stagesSchema);

export default stages;
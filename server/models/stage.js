import mongoose from 'mongoose';

const stagesSchema = mongoose.Schema({
    label: {
        type: String,
        unique: true,
        required: true
    },
    order: {
        type: Number,
        required: true,
        unique: true,
        min: 0
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
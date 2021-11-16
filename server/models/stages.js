import mongoose from 'mongoose';

const stagesSchema = mongoose.Schema({
    id: Number,
    label: String,
    description: String,
    order: Number,
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
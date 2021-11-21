import mongoose from 'mongoose';

const scrapReasonsSchema = mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    description: String,
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    }
});

const scrapReasons = mongoose.model('scrapReasons', scrapReasonsSchema);

export default scrapReasons;
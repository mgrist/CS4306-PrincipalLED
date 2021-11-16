import mongoose from 'mongoose';

const workOrderSchema = mongoose.Schema({
    id: Number,
    wo_number: {
        type: String,
        required: true
    },
    bom_number: {
        type: String,
        required: true
    },
    bom_description: String,
    product_id: {
        type: Number,
        required: true
    },
    stage_id: Number,
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    },
    archived_at: {
        type: Date,
        default: new Date()
    }
});

const workOrder = mongoose.model('workOrder', workOrderSchema);

export default workOrder;
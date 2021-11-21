import mongoose from 'mongoose';

const workOrderSchema = mongoose.Schema({
    wo_number: {
        type: Number,
        required: true
    },
    wo_quantity: {
        type: Number,
        required: true
    },
    product_id: {
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
    },
});

const workOrder = mongoose.model('workOrder', workOrderSchema);

export default workOrder;
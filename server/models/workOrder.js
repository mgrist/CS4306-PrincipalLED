import mongoose from 'mongoose';

const workOrderSchema = mongoose.Schema({
    wo_number: {
        type: Number,
        unique: [true, "A work order with this number already exists"],
        required: true
    },
    wo_quantity: {
        type: Number,
        required: true
    },
    product_number: {
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

const workOrder = mongoose.model('workOrder', workOrderSchema);

export default workOrder;
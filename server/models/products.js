import mongoose from 'mongoose';

const productsSchema = mongoose.Schema({
    id: Number,
    part_number: String,
    label: String,
    enabled: Boolean,
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    }
});

const products = mongoose.model('products', productsSchema);

export default products;
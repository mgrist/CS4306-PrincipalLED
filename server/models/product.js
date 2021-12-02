import mongoose from 'mongoose';

const productsSchema = mongoose.Schema({
    part_number: {
        type: String,
        required: true,
        unique: true
    },
    label: {
        type: String,
        unique: true
    },
    assemblie: {
        type: String,
        unique: true
    },
    enabled: {
        type: Boolean,
        deafult: true
    },
    cost: {
        type: Number,
        default: 0.00,
        set: function (v) {
            return Number((Math.round(100 * v) / 100));
            }
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

const products = mongoose.model('products', productsSchema);

export default products;
import mongoose from 'mongoose';

const productsSchema = mongoose.Schema({
    part_number: {
        type: String,
        required: true
    },
    label: String,
    enabled: {
        type: Boolean,
        deafult: true
    },
    cost: {
        type: Number,
        default: 0.00,
        set: function (v) {
            return Number((Math.abs(v) * 100).toPrecision(15));
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
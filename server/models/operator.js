import mongoose from 'mongoose';

const operatorsSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    initials: {
        type: String,
        required: true,
        unique: true
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

const operators = mongoose.model('operators', operatorsSchema);

export default operators;
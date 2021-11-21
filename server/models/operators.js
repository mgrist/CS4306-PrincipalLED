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
        set
    },
});

const operators = mongoose.model('operators', operatorsSchema);

export default operators;
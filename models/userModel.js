const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    password: {
        type: String,
        required: true, 
        min: 6,
        max: 1024
    }, 
    firstDose: {
        type: Date,
        default: null      
    },
    secondDose: {
        type: Date, 
        default: null
    },
    fullyVaccinated: {
        type: Boolean,
        required: true
    }
}, {collection: 'users'});

module.exports = mongoose.model("User", userSchema);
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
    registeredDate: {
        type: Date,
        default: Date.now
    },
    vaccines : {
        firstDose: {
            type: Date,
            default: null      
        },
        secondDose: {
            type: Date, 
            default: null
        } 
    },
    fullyVacinated: {
        type: Boolean,
        default: false,          // A new user is assumed to have not received any doses
        required: true
    }
}, {collection: 'users'});

module.exports = mongoose.model("User", userSchema);
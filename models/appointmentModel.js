const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    title: String,
    startDate: String,
    endDate: String,
    currentClassSize: Number,
    maxClassSize: Number,
    location: String,
    notes: String,
    vaccinatedOnly: Boolean,
    participants: Array,
    id: mongoose.Schema.Types.ObjectId,
    _id: mongoose.Schema.Types.ObjectId
}, {collection: 'appointments'});

module.exports = mongoose.model('Appointment', appointmentSchema)
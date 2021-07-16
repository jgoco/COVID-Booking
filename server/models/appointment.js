const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    title: String,
    startDate: String,
    endDate: String,
    classSize: Number,
    location: String,
    vaccinatedOnly: Boolean,
    participants: Array,
    _id: mongoose.Schema.Types.ObjectId
})
module.exports = mongoose.model('Appointment', appointmentSchema)
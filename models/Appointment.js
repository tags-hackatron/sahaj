const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({
    date: {
        type: Number,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
}, { timestamps: true });
const Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;
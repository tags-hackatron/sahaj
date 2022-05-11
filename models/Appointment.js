const mongoose = require('mongoose');

//------------ Appointment Schema ------------//

const AppointmentSchema = new mongoose.Schema({
      
    date: {
      type: String,
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
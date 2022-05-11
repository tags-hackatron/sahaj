const mongoose = require('mongoose');

//------------ Appointment Schema ------------//

const DoctorDetailSchema = new mongoose.Schema({
      
    name: {
      type: String,
      required: true
    },    
    docID: {
      type: String,
      required: true
    },    
    speciality: {
      type: String
    }, 
   Location: {
        type: String
      }, 
    fees: {
        type: String
      }, 

  }, { timestamps: true });

  const Doctor = mongoose.model('Doctor', DoctorDetailSchema );

module.exports = Doctor;
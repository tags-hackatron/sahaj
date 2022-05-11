const mongoose = require('mongoose');

//------------ Registration Schema ------------//

const DataentrySchema = new mongoose.Schema({
  adharNumber: {
      type: Number,
      required: true
    },
    patientName: {
      type: String,
      required: true
    },
    report: {
      type: File,
      required: true
    },
    doctorName: {
      type: String,
      required: true
    },
    hospitalName: {
      type: String,
      required: true
    },
    hospitalLocation: {
        type: String,
        required: true
      },
     medicine1: {
        type: String,
      required: true
      },
      forWhat1: {
        type: String,
        required: true
      },
      startDate1: {
        type: String,
        required: true
      },
      tillDate1: {
        type: String,
        required: true
      },
      morning1:{
        type: String,
        required: true
      },
      afternoon1:{
        type: String,
        required: true
      },
      night1:{
        type: String,
        required: true
      },

      medicine2: {
        type: String,
      required: true
      },
      forWhat2: {
        type: String,
        required: true
      },
      startDate2: {
        type: String,
        required: true
      },
      tillDate2: {
        type: String,
        required: true
      },
      morning2:{
        type: String,
        required: true
      },
      afternoon2:{
        type: String,
        required: true
      },
      night2:{
        type: String,
        required: true
      },
    
      medicine3: {
        type: String,
      required: true
      },
      forWhat3: {
        type: String,
        required: true
      },
      startDate3: {
        type: String,
        required: true
      },
      tillDate3: {
        type: String,
        required: true
      },
      morning3:{
        type: String,
        required: true
      },
      afternoon3:{
        type: String,
        required: true
      },
      night3:{
        type: String,
        required: true
      },

      diet:{
        type: String,
        required: true
      },
  }, { timestamps: true });

  const dataentry = mongoose.model('dataentry', DataentrySchema);

module.exports = dataentry;

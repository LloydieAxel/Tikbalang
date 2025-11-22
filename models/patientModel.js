const mongoose = require("mongoose");

const medicalHistorySchema = new mongoose.Schema({
  diagnosis: { type: String, required: true },
  treatment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const patientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true },
  medicalHistory: [medicalHistorySchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Patient", patientSchema);

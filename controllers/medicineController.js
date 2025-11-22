const Medicine = require("../models/medicineModel");

// Create medicine
exports.createMedicine = async (req, res) => {
  try {
    const med = new Medicine(req.body);
    await med.save();
    res.status(201).json({ message: "Medicine added", medicine: med });
  } catch (err) {
    res.status(500).json({ error: "Failed to add medicine", details: err.message });
  }
};

// Get all medicines
exports.getMedicines = async (req, res) => {
  try {
    const list = await Medicine.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch medicines" });
  }
};

// Get single medicine
exports.getMedicineById = async (req, res) => {
  try {
    const med = await Medicine.findById(req.params.id);
    if (!med) return res.status(404).json({ error: "Medicine not found" });
    res.json(med);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch medicine" });
  }
};

// Update medicine
exports.updateMedicine = async (req, res) => {
  try {
    const updated = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Medicine not found" });
    res.json({ message: "Medicine updated", medicine: updated });
  } catch (err) {
    res.status(500).json({ error: "Failed to update medicine" });
  }
};

// Delete medicine
exports.deleteMedicine = async (req, res) => {
  try {
    const deleted = await Medicine.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Medicine not found" });
    res.json({ message: "Medicine deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete medicine" });
  }
};

const Schedule = require("../models/scheduleModel");

// Create schedule
exports.createSchedule = async (req, res) => {
  try {
    const sched = new Schedule(req.body);
    await sched.save();
    res.status(201).json({ message: "Schedule added", schedule: sched });
  } catch (err) {
    res.status(500).json({ error: "Failed to add schedule", details: err.message });
  }
};

// Get all schedules
exports.getSchedules = async (req, res) => {
  try {
    const list = await Schedule
      .find()
      .populate("patientId")
      .sort({ createdAt: -1 });

    res.json(list);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch schedules" });
  }
};

// Get one schedule
exports.getScheduleById = async (req, res) => {
  try {
    const sched = await Schedule.findById(req.params.id).populate("patientId");
    if (!sched) return res.status(404).json({ error: "Schedule not found" });
    res.json(sched);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch schedule" });
  }
};

// Update schedule
exports.updateSchedule = async (req, res) => {
  try {
    const updated = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Schedule not found" });
    res.json({ message: "Schedule updated", schedule: updated });
  } catch (err) {
    res.status(500).json({ error: "Failed to update schedule" });
  }
};

// Delete schedule
exports.deleteSchedule = async (req, res) => {
  try {
    const deleted = await Schedule.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Schedule not found" });
    res.json({ message: "Schedule deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete schedule" });
  }
};

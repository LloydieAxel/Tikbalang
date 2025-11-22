const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

const patientRoutes = require("./routes/patientRoute");
const medicineRoutes = require("./routes/medicineRoute");
const scheduleRoutes = require("./routes/scheduleRoute");

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/patients", patientRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/schedules", scheduleRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

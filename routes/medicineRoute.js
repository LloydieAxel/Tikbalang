const express = require("express");
const router = express.Router();
const controller = require("../controllers/medicineController");

router.post("/", controller.createMedicine);
router.get("/", controller.getMedicines);
router.get("/:id", controller.getMedicineById);
router.put("/:id", controller.updateMedicine);
router.delete("/:id", controller.deleteMedicine);

module.exports = router;

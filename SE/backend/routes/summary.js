// routes/summary.js
import express from "express";
import Summary from "../models/Summary.js";

const router = express.Router();

// Save Final Summary after payment
router.post("/final", async (req, res) => {
  try {
    const {
      userId,
      userName,
      package: selectedPackage,
      hotel,
      transport,
      totalAmount,
    } = req.body;

    // Don't save empty or canceled fields
    const summaryData = {
      user: userId,
      userName,
      totalAmount,
    };

    if (selectedPackage) summaryData.package = selectedPackage;
    if (hotel) summaryData.hotel = hotel;
    if (transport) summaryData.transport = transport;

    const summary = new Summary(summaryData);
    await summary.save();

    res.status(201).json({ message: "✅ Summary saved", summary });
  } catch (err) {
    console.error("❌ Error saving summary:", err);
    res.status(500).json({ message: "Failed to save summary" });
  }
});

export default router;

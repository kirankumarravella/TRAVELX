// models/Summary.js
import mongoose from "mongoose";

// Define the Summary Schema
const SummarySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userName: { type: String, required: true },
  package: { type: String }, // Removed `required: true`
  hotel: { type: String },   // Removed `required: true`
  transport: { type: String }, // Removed `required: true`
  totalAmount: { type: Number, required: true },
  bookingDate: { type: Date, default: Date.now },
});

export default mongoose.model("Summary", SummarySchema);

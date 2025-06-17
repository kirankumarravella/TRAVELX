import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // ✅ Import CORS
import connectDB from "./db.js";
import authRoutes from "./routes/auth.js";
import summaryRoutes from "./routes/summary.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); // ✅ Middleware to parse JSON

// ✅ Properly Configure CORS
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ Allow requests from frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // ✅ Allowed HTTP methods
    credentials: true, // ✅ Allow cookies, tokens
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/summary", summaryRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

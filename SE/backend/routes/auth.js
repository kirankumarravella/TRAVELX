import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// ✅ Signup Route
router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save user to database
        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Update Last Login Time
        user.lastLogin = new Date();
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, userId: user._id, lastLogin: user.lastLogin });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;

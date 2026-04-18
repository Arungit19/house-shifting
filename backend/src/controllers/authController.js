const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const existing = await userModel.findUserByEmail(email);
    if (existing) return res.status(400).json({ message: "User exists" });

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.createUser({
      name,
      email,
      phone,
      password: hash,
    });

    res.json({ message: "Registered", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findUserByEmail(email);
    if (!user) return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Wrong password" });

    const token = generateToken(user);

    res.json({
      data: {
        token,
        user,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// SEND OTP
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findUserByEmail(email);
    if (!user) return res.status(400).json({ message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = Date.now() + 5 * 60 * 1000;

    await userModel.saveOtp(email, otp, expiry);

    console.log("OTP:", otp); // 🔥 show in console

    res.json({ message: "OTP sent" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// VERIFY OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await userModel.verifyOtp(email, otp);
    if (!user) return res.status(400).json({ message: "Invalid OTP" });

    if (Date.now() > user.otp_expiry)
      return res.status(400).json({ message: "OTP expired" });

    const token = generateToken(user);

    res.json({
  data: {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role, // ✅ IMPORTANT
      name: user.name
    }
  }
});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// FORGOT PASSWORD
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findUserByEmail(email);
    if (!user) return res.status(400).json({ message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = Date.now() + 5 * 60 * 1000;

    await userModel.saveOtp(email, otp, expiry);

    console.log("Reset OTP:", otp);

    res.json({ message: "Reset OTP sent" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
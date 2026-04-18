const pool = require("../config/db");

const findUserByEmail = async (email) => {
  const res = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
  return res.rows[0];
};

const createUser = async ({ name, email, phone, password }) => {
  const res = await pool.query(
    "INSERT INTO users (name,email,phone,password) VALUES ($1,$2,$3,$4) RETURNING *",
    [name, email, phone, password]
  );
  return res.rows[0];
};

const saveOtp = async (email, otp, expiry) => {
  await pool.query(
    "UPDATE users SET otp=$1, otp_expiry=$2 WHERE email=$3",
    [otp, expiry, email]
  );
};

const verifyOtp = async (email, otp) => {
  const res = await pool.query(
    "SELECT * FROM users WHERE email=$1 AND otp=$2",
    [email, otp]
  );
  return res.rows[0];
};

const getUsers = async () => {
  const res = await pool.query("SELECT * FROM users");
  return res.rows;
};

module.exports = {
  findUserByEmail,
  createUser,
  saveOtp,
  verifyOtp,
  getUsers,
};
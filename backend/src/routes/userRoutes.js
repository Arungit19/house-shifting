const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");

router.get("/", user.getUsers);
router.post("/profile", user.saveProfile);

module.exports = router;
// routes/api/users.js
const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const authMiddleware = require("../../middlewares/authMiddleware");

// GET all users
router.get("/", authMiddleware, userController.getAllUsers);

// POST a new user (registration)
router.post("/", userController.createUser);

module.exports = router;

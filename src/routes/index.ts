// routes/index.js
const express = require("express");
const router = express.Router();

// Import route modules
const userRoutes = require("./api/users");
const productRoutes = require("./api/products");

// Use the imported routes
router.use("/users", userRoutes);
router.use("/products", productRoutes);

module.exports = router;

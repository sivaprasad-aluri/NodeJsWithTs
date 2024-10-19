// app.js
const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Use routes
app.use("/api", routes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;

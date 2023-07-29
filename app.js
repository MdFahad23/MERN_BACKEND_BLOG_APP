const express = require("express");
const cors = require("cors");

// Import ErrorHandler
const {
  errorResponserHandler,
  invalidPathHandler,
} = require("./middleware/errorHandler");

// Import Routes
const userRoutes = require("./routes/userRoutes");

const app = express();
// middleware function
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);

// Error Handler
app.use(invalidPathHandler);
app.use(errorResponserHandler);

module.exports = app;

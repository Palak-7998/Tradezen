require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URI;

// test route
app.get("/test", (req, res) => {
  res.send("TradeZen backend is working");
});

// connect to MongoDB FIRST
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    // start server ONLY after DB connects
    app.listen(PORT, () => {
      console.log(`App is started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
require('dotenv').config(); // Load .env variables
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

  const express = require('express');  // Import express first
  const mongoose = require('mongoose');  // Import mongoose second
  const dotenv = require('dotenv');  // Import dotenv third
  const cors = require('cors');  // Import cors last
  
// Initialize environment variables
dotenv.config();

// Create an express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch(err => {
    console.log("Failed to connect to MongoDB", err);
  });

// Define routes (Example route)
app.get("/", (req, res) => {
  res.send("Library API is running");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

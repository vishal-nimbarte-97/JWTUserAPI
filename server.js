const express = require('express');
// const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const { connnection } = require('./config/database'); // Import the database connection

// dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const startServer = async () => {
  try {
    await connnection(); // Connect to the database
    app.listen(3000, () => {
      console.log("The Server is Running on Port : http://localhost:3000");
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

startServer();

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');

const app = express();
const port = process.env.PORT || 3007;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const createProductRoute = require('./routes/createProductRoute');
app.use('/api/products', createProductRoute);

// Database connection
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
};

// Start server
app.listen(port, () => {
  connectToDatabase();
  console.log(`Server running on port ${port}`);
});

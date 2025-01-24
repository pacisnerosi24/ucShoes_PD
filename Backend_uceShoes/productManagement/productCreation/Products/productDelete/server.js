const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./config/database');
const deleteProductRoute = require('./routes/deleteProductRoute');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', deleteProductRoute);

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Database connected successfully');
  })
  .catch((error) => {
    console.error('❌ Unable to connect to the database:', error);
  });

// Start the server
const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

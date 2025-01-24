const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Database connection

// Import routes
const deleteCategoryRoutes = require('./routes/deleteCategoryRoute');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/categories', deleteCategoryRoutes);

// Database connection and synchronization
sequelize.sync().then(() => {
  console.log('Database connected');
}).catch((error) => {
  console.error('Error syncing database: ', error);
});

// Start server
const PORT = process.env.PORT || 3004; // Ensure correct port is used
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

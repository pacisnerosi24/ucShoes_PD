const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Database connection

// Import routes
const updateCategoryRoutes = require('./routes/updateCategoryRoute'); // Route to update categories

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/categories', updateCategoryRoutes); // Route to update categories

// Database connection and synchronization
sequelize.sync().then(() => {
  console.log('Database connected');
}).catch((error) => {
  console.error('Error syncing database: ', error);
});

// Start server
const PORT = process.env.PORT || 3003; // Changed port to 3003 to avoid conflicts with other services
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

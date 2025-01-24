const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Database connection

// Import routes
const categoryRoutes = require('./routes/getAllCategoriesRoute'); // Ensure the route is correct

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/categories', categoryRoutes);

// Database connection and synchronization
sequelize.sync().then(() => {
    console.log('connect base');
}).catch((error) => {
    console.error('Error syncing database: ', error);
});

// Start server
const PORT = process.env.PORT || 3001; // Ensure the port is 3001 as mentioned earlier
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

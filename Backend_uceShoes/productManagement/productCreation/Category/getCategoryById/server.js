const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Database connection

// Import routes
const categoryRoutes = require('./routes/getCategoryByIdRoute');
const categoryByIdRoutes = require('./routes/getCategoryByIdRoute');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/categories', categoryByIdRoutes);

// Sync database
sequelize.sync()
  .then(() => console.log('Database connected'))
  .catch((error) => console.error('Database connection error: ', error));

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

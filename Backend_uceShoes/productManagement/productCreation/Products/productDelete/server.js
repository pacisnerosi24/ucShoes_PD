const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./config/database');
const deleteProductRoute = require('./routes/deleteProductRoute');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.use('/api/products', deleteProductRoute);

sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Database connected successfully');
  })
  .catch((error) => {
    console.error('❌ Unable to connect to the database:', error);
  });

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

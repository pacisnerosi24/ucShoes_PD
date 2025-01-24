const express = require('express');
const { sequelize } = require('./config/database');
const updateProductRoute = require('./routes/updateProductRoute');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3008;

app.use(express.json());
app.use('/api/products', updateProductRoute);

sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected successfully');
  })
  .catch(err => {
    console.error('❌ Unable to connect to the database:', err);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

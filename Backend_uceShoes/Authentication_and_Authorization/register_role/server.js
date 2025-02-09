const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/Database');
const roleRoutes = require('./routes/Role_routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./config/swagger');

const app = express();

if (!process.env.ORIGIN_FRONT) {
  console.error("Error: no esta definida la variable de entorno del frontend.");
  process.exit(1);
}

app.use(cors({
  origin: process.env.ORIGIN_FRONT,
  methods: "POST",
  allowedHeaders: "Content-Type,Authorization"
}));

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/register', roleRoutes);

//test

const startServer = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synchronized successfully');

    const PORT = process.env.SERVER_PORT_REGISTER_ROLE || 3013;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

startServer();

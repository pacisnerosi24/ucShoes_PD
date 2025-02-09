const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/Database');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const registerRoutes = require('./routes/Register_User_Routes');
const cors = require('cors');

const app = express();

if (!process.env.ORIGIN_FRONT) {
    console.error("Error: no esta definida la variable de entorno del frontend.");
    process.exit(1);
  }  

app.use(cors({
  origin: process.env.ORIGIN_FRONT,
  methods: "POST",
  allowedHeaders: "Content-Type"
}));

app.use(bodyParser.json());

app.use('/register', registerRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas creadas o sincronizadas correctamente');
        const PORT = process.env.SERVER_PORT_REGISTER_USER || 3015;
        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en el puerto ${PORT}`);
            console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
        });
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });

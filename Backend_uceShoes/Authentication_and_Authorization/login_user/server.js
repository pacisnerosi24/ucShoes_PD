const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/Database');
const protectedLogin = require('./routes/protectes_userLogin');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const cors = require('cors');

const app = express();

if (!process.env.ORIGIN_FRONT) {
  console.error("Error: no esta definida la variable de entorno del frontend.");
  process.exit(1);
}

app.use(cors({
  origin: process.env.ORIGIN_FRONT,
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization"
}));

//

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/protected', protectedLogin);

sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Tablas creadas o sincronizadas correctamente');
    const PORT = process.env.SERVER_PORT_LOGIN_USER || 3002;
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en el puerto ${PORT}`);
      console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });

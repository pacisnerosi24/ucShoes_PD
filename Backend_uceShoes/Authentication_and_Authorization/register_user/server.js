const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/Database');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const registerRoutes = require('./routes/Register_User_Routes');

const app = express();

app.use(bodyParser.json());

app.use('/register', registerRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas creadas o sincronizadas correctamente');
        const PORT = process.env.PORT || 3001;
        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en el puerto ${PORT}`);
            console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
        });
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });

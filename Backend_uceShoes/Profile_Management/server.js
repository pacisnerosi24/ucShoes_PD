const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/Database');
const roleRoutes = require('./routes/RoleRoutes');
const authRoutes = require('./routes/AuthenticationRoutes');
const protectedRoutes = require('./routes/Protected');
const app = express();


app.use(bodyParser.json());

app.use('/api', roleRoutes);
app.use('/user', authRoutes);
app.use('/protected', protectedRoutes);

sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Tablas creadas o sincronizadas correctamente');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
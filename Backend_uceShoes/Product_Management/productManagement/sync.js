const sequelize = require('../config/database');
const { Product, Category } = require('../models/associations');

const syncDatabase = async () => {
  try {
    // Conectar a la base de datos
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');

    // Sincronizar modelos
    await sequelize.sync({ force: false }); // Cambiar a "true" para reiniciar las tablas
    console.log('Las tablas fueron sincronizadas correctamente.');

    // Crear datos iniciales en Categorías
    await Category.bulkCreate(
      [
        { name: 'Sports' },
        { name: 'Casual' },
        { name: 'Formal' },
      ],
      { ignoreDuplicates: true }
    );
    console.log('Datos iniciales creados (categorías).');

    process.exit(0); // Finalizar proceso
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
    process.exit(1);
  }
};

// Ejecutar sincronización
syncDatabase();

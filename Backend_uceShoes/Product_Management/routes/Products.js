const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Obtener todos los productos
router.get('/', productsController.getAllProducts);

// Obtener un producto por ID
router.get('/:id', productsController.getProductById);

// Crear un nuevo producto
router.post('/', productsController.createProduct);

// Actualizar un producto existente
router.put('/:id', productsController.updateProduct);

// Eliminar un producto
router.delete('/:id', productsController.deleteProduct);

module.exports = router;

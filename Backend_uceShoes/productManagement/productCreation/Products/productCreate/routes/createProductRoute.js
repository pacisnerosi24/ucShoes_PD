const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/createProductController');

// POST route to create a new product
router.post('/', createProduct);

module.exports = router;

const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/createProductController');

// POST route to create a new product
router.post('/create', createProduct);

module.exports = router;

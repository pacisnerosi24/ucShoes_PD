const express = require('express');
const { updateProduct } = require('../controllers/updateProductController');

const router = express.Router();

router.put('/update/:productId', updateProduct);

module.exports = router;

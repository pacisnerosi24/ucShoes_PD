const express = require('express');
const { deleteProduct } = require('../controllers/deleteProductController');

const router = express.Router();

router.delete('/delete/:productId', deleteProduct);

module.exports = router;

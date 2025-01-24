const express = require('express');
const getCategoryById = require('../controllers/getCategoryByIdController');

const router = express.Router();

// Route to get a category by id
router.get('/:id', getCategoryById);

module.exports = router;

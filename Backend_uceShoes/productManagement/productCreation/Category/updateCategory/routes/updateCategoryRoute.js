const express = require('express');
const updateCategory = require('../controllers/updateCategoryController');

const router = express.Router();

// Define PUT route to update a category by its ID
router.put('/:id', updateCategory);

module.exports = router;

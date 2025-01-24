const express = require('express');
const router = express.Router();
const deleteCategoryController = require('../controllers/deleteCategoryController');

// DELETE route to delete a category by ID
router.delete('/:id', deleteCategoryController);

module.exports = router;

const express = require('express'); 
const getAllCategories = require('../controllers/getAllCategoriesController');


const router = express.Router();

// Route to get all categories
router.get('/search', getAllCategories);

module.exports = router;

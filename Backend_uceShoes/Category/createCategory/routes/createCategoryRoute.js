const express = require('express');
const router = express.Router();
const createCategory = require('../controllers/createCategory');

// Route to create a new category
router.post('/', createCategory);

module.exports = router;

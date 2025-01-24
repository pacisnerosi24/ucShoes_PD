const express = require('express');
const router = express.Router();
const createCategory = require('../controllers/createCategory');

// Route to create a new category
router.post('/create', createCategory);

module.exports = router;

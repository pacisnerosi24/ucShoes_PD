const express = require('express');
const {authenticateToken, aurthRole} = require('../middleware/authMiddleware');
const router = express.Router();

// Route of admin
router.get('/admin', authenticateToken, aurthRole('Admin'), (req, res) => {
    res.json({message: 'Bienvenido admin.'});
});

router.get('/dashboard', authenticateToken, aurthRole('User', 'Admin'), (req, res) => {
    res.json({message: `Bienvenido al dashboard, ${req.user.role}`});
});

module.exports = router;
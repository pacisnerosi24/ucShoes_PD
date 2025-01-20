const express = require('express');
const { createRole, getAllRoles, getRolById, updateRole, deleteRole } = require('../controllers/RoleController');
const router = express.Router();

router.post('/role', createRole);
router.put('/role:id', updateRole);
router.get('/role', getAllRoles);
router.get('/role:id', getRolById);
router.delete('/role:id', deleteRole);

module.exports = router;
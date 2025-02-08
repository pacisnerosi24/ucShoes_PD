const express = require('express');
const axios = require('axios');
const {getRoleAll,getRolById} = require('../controllers/get_user_role_controller');
const { authenticateToken, authRole } = require('../middleware/roleMiddleware');
const routes = express.Router();

//routes.get('/Role', getRoleAll);
//test

routes.get('/role', authenticateToken, authRole('admin'),getRoleAll);

routes.get('/Role:id',getRolById);

module.exports = routes;

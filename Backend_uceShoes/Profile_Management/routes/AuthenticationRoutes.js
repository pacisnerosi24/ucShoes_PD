const express = require('express');
const { registerUser, loginUser }= require('../controllers/UserController');
const { createUserData, deleteUserData, updateUserData, getAllUserData, getUserDataById} = require('../controllers/UserDataController');
const router = express.Router();

router.post('/register',registerUser);
router.post('/login', loginUser);
router.post('/userdata', createUserData);
router.get('/userdata', getAllUserData);
router.get('/userdata:id', getUserDataById);
router.put('/userdata:id', updateUserData);
router.delete('/userdata', deleteUserData);

module.exports = router;
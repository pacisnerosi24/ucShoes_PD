const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const getJwtSecret = require('../config/jwtSecret');

const jwtSecret = getJwtSecret();

const registerUser = async (req, res) => {
    try {
        const {user_name, first_name, middle_name, lastname, 
            email, password, role_id, user_data_id} = req.body;

        if (!user_name, !first_name, !middle_name, !lastname, !email,
            !password, !role_id) {
            return res.status(400).json({message: 'Todos los campos son obligatorios!.'});
        }

        const existingUser = await User.findOne({where: {email, user_name}});
        if (existingUser) {
            return res.status(400).json({message: 'El email y nombre de usuario ya esta en uso.'})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            user_name,
            first_name,
            middle_name,
            lastname,
            email,
            password: hashedPassword,
            role_id,
            user_data_id,
        });

        res.status(201).json({message: 'Usuario registrado exitosamente.', user: newUser});
    } catch (error) {
        res.status(500).json({message: 'Error al registrar el usuario', error: error.message});
    }
};

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        //data validate

        if(!email || !password){
            return res.status(400).json({message: 'Todos los campos son obligatorios.'});
        }

        //search user by email

        const user = await User.findOne({where: {email}});
        if (!user) {
            return res.status(404).json({message: 'Correo de usuario no encaontrado.'});
        }

        //password validate

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({message: 'Contraseña incorrecta.'});
        }

        //JWT Token generation

        const token = jwt.sign(
            { user_id: user.user_id, role_id: user.role_id},
            jwtSecret,
            {expiresIn: '1h'}
        );
        res.status(200).json({message: 'Inicio de sesion exitoso', token});
    } catch (error) {
        res.status(500).json({message: 'Error al iniciar sesion', error: error.message});
    }
};

module.exports = {
    registerUser,
    loginUser,
};
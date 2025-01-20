const jwt = require('jsonwebtoken');
const getJwtSecret = require('../config/jwtSecret');
const User = require('../models/User');
const Role = require('../models/Role');

async function authenticateToken (req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado' });
  }

  try {
    const JWT_SECRET = getJwtSecret(); 
    
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('Token decodificado:', decoded); 
    const user = await User.findByPk(decoded.role_id, {include: {
      model: Role, 
      as: 'role' //alias defined in the relationship
    }});

    if (!user) {
      console.error('Usuario no encontrado con ID de rol:', decoded.id_role);
      return res.status(404).json({message: 'Usuario no encontrado'});
    }

    req.user = {
      id_user: user.id_user,
      user_name: user.user_name,
      role: user.role.role_name,
    };

    console.log('Rol asignado a req.user:', req.user.role);
    next();
  } catch (error) {
    console.error('Error verificando token:', error);
    res.status(403).json({message: 'Token invalido o expirado.'});
  }
}

//Authorizated role

function aurthRole(...alloewdRoles){
  return(req, res, next) => {
    if(!req.user || !alloewdRoles.includes(req.user.role)){
      console.log('Rol no permitido:', req.user.role);
      return res.status(403).json({message: 'No tienes acceso para esra ruta.'});
    }
    next();
  };
}
module.exports = {
  authenticateToken,
  aurthRole
};

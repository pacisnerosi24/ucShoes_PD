const Role = require('../models/Role');

//create new role
const createRole = async (req, res) => {
    try {
        const {role_name, description, status} = req.body
        
        //validate data
        if (!role_name || !description || !status) {
            return res.status(400).json({message: 'El nombre, descripcion y estatus son obligatorios'});
        }
        //role create

        const newRole = await Role.create({role_name,description,status});

        res.status(201).json({
            message: 'Rol creado exitosamente!',
            role: newRole,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear el rol',
            error: error.message,
        });
    }
};

//delete role
const deleteRole = async (req, res) => {
    const {id} = req.params;

    try {
        const delete_role = await Role.findByPk(id);

        if(!delete_role){
            return res.status(404).json({message: 'Rol no encontrado!'});
        }
        await delete_role.destroy();
        res.status(200).json({message: 'Rol eliminado exitosamente!'});
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el rol',
            error: error.message,
        });
    }
};

//update rol

const updateRole = async (req, res) => {
    const {id} = req.params;
    const {role_name, description, status} = req.body

    try {
        const update_role = await Role.findByPk(id);

        if (!update_role) {
            return res.status(404).json({message: 'Rol no encontrado'})
        }

        update_role.role_name = role_name || update_role.role_name;
        update_role.description = description || update_role.description;
        update_role.status = status || update_role.status;

        await update_role.save();

        res.status(200).json({message: 'Rol actualizado correctamente!.'});
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el rol',
            error: error.message,
        });
    }
};

//get all roles

const getAllRoles = async(req, res) => {
    try {
        const get_all_roles = await Role.findAll();
        res.status(200).json(get_all_roles);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener todos los roles',
            error: error.message,
        });
    }
};

//get role by ID

const getRolById = async(req, res) => {
    const {id} = req.params;
    try {
        const get_role_by_id = await Role.findByPk(id);
        if (!get_role_by_id) {
            return res.status(404).json({message: 'Rol no encontrado.'});
        }
        res.status(200).json(getRolById);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener el rol',
            error: error.message,
        });
    }
};

module.exports = {
    createRole,
    deleteRole,
    updateRole,
    getAllRoles,
    getRolById,
};


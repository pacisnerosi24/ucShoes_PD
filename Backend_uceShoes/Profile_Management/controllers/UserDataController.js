const UserData = require('../models/UserData');

//create new userData

const createUserData = async (req, res) => {
    try {
        const {country, city, address, phone, zip_code, region} = req.body

        //validate data
        if (!country || !city || !address || !phone || !zip_code || !region) {
            return res.status(400).json({message: 'Todos los campos son oblicatorios'});
        }

        //user dataCreate

        const new_userdata = await UserData.create({country, city, address, phone, zip_code, region});

        res.status(201).json({
            message: 'Datos creados correctamente',
            userData: new_userdata,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear los datos de usuario',
            error: error.message,
        });
    }
};

//dalete userData

const deleteUserData = async(req, res) => {
    const {id} = req.params;
    try {
        const delete_userdata = await UserData.findByPk(id);

        if(!delete_userdata){
            return res.status(404).json({message: 'Datos del usuario no encontrados'});
        }
        await  delete_userdata.destroy();
        res.status(200).json({message: 'Datos del usuario eliminados con exito'});
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar los datos del usuario.',
            error: error.message,
        });
    }
};

//update userData

const updateUserData = async(req, res) => {
    const {id} = req.params;
    const {country, city, address, phone, zip_code, region} = req.body

    try {
        const update_userdata = await UserData.findByPk(id);
        if(!update_userdata){
            return res.status(404).json({message: 'Datos del usuario no encontrados.'});
        }

        update_userdata.country = country || update_userdata.country;
        update_userdata.city = city || update_userdata.city;
        update_userdata.address = address || update_userdata.address;
        update_userdata.phone = phone || update_userdata.phone;
        update_userdata.zip_code = zip_code || update_userdata.zip_code;
        update_userdata.region = region || update_userdata.region;

        await update_userdata.save();

        res.status(200).json({message: 'Datos del usuario actualizados'});
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar los datos del esuario',
            error: error.message,
        });
    }
};

//get all UsersData
const getAllUserData = async(req, res) => {
    const {id} = req.params;

    try {
        const get_all_userdata = await UserData.findAll();
        res.status(200).json(get_all_userdata);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener todos los datos del usuario',
            error: error.message,
        });
    }
};

// get UsersData by ID

const getUserDataById = async(req, res) =>{
    const {id} = req.params;
    try {
        const get_userdata_by_id = await UserData.findByPk(id);
        if(!get_userdata_by_id){
            return res.status(404).json({message: 'Datos del usuario no encontrado.'});
        }

        res.status(200).json({getUserDataById});
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los datos del usuario.',
            error: error.message,
        });
    }
};

module.exports = {
    createUserData,
    updateUserData,
    deleteUserData,
    getAllUserData,
    getUserDataById,
};
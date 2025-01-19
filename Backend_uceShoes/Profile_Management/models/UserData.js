const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');
const User = require('./User')

const UserData = sequelize.define('UserData',{
    user_data_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    country:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    city:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    address:{
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    phone:{
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    zip_code:{
        type: DataTypes.STRING(6),
        allowNull: false,
    },
    region:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
});

module.exports = UserData;
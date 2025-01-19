const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/Database');
const Role = require('./Role');
const UserData = require('./UserData');

const User = sequelize.define('User',{
    user_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_name:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    first_name:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    middle_name:{
        type: DataTypes.STRING(50),
    },
    lastname:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(120),
        allowNull: false,
        unique: true,
    },
    password:{
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    creation_date:{
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), 
    },
    last_date_update:{
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    role_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Role,
            key: 'id_role',
        },
    },
    user_data_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references:{
            model: UserData,
            key: 'user_data_id'
        },
    },
},{
    tableName: 'user',
    timestamps: false,
});

User.belongsTo(Role,{foreignKey: 'role_id', as: 'role'});
User.belongsTo(UserData,{foreignKey: 'user_data_id', as: 'UserData'});

module.exports = User;
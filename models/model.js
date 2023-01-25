import {Sequelize, DataTypes} from 'sequelize'

const sequelize = new Sequelize("tiketonline", "root", "", {
    host : 'localhost', 
    dialect : 'mysql' 
});

export {sequelize, DataTypes}
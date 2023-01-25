import {sequelize, DataTypes} from "./model.js"

const Product = sequelize.define('products', {
    images : DataTypes.STRING,
    name : DataTypes.STRING, 
    price : DataTypes.INTEGER
})


export default Product
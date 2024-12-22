// Purpose: This file is used to create the Product model, 
// which will be used to interact with the products table in the database.
// This model will be used to perform CRUD operations on the products table.


// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    // id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // price column
    price: { // Here is where we establish the price column as a DECIMAL data type
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    // stock column
    stock: { // Here is where we establish the stock column as an INTEGER data type
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    // category_id column
    category_id: { // Here is where we establish the category_id column as an INTEGER data type
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("../config/db");


const User = sequelize.define(
  'user',
  {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    // Other model options go here
    timestamps: true
  },
);

module.exports = User;
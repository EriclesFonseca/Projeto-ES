const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  favoriteTeams: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true }, 
}, {
  tableName: 'users',
  timestamps: true,
});

module.exports = User;

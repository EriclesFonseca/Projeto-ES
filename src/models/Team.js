const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Team = sequelize.define('Team', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  coach: { type: DataTypes.STRING },
  logoUrl: { type: DataTypes.STRING(1024) },
  ranking: { type: DataTypes.INTEGER }, 
  points: { type: DataTypes.INTEGER },   
}, {
  tableName: 'teams',
  timestamps: true,
});

module.exports = Team;

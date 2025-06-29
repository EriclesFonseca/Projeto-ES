const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Team = require('./Team');

const Player = sequelize.define('Player', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  position: { type: DataTypes.STRING },
  goals: { type: DataTypes.INTEGER, defaultValue: 0 },
  assists: { type: DataTypes.INTEGER, defaultValue: 0 },
  appearances: { type: DataTypes.INTEGER, defaultValue: 0 },
}, {
  tableName: 'players',
  timestamps: true,
});


Player.belongsTo(Team, { foreignKey: 'teamId' });

module.exports = Player;

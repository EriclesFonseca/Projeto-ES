const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Team = require('./Team');

const Game = sequelize.define('Game', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  homeTeamScore: { type: DataTypes.INTEGER },
  awayTeamScore: { type: DataTypes.INTEGER },
  date: { type: DataTypes.DATE, allowNull: false },
  location: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING, defaultValue: 'scheduled' }, 
}, {
  tableName: 'games',
  timestamps: true,
});


Game.belongsTo(Team, { as: 'homeTeam', foreignKey: 'homeTeamId' });
Game.belongsTo(Team, { as: 'awayTeam', foreignKey: 'awayTeamId' });

module.exports = Game;

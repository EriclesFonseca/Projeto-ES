const Player = require('../models/Player');
const Team = require('../models/Team');

const playerController = {
  async listPlayers(req, res) {
    try {
      const players = await Player.findAll({ include: Team });
      res.json(players);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar jogadores' });
    }
  },

  async getPlayerById(req, res) {
    try {
      const { id } = req.params;
      const player = await Player.findByPk(id, { include: Team });
      if (!player) return res.status(404).json({ error: 'Jogador não encontrado' });
      res.json(player);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar jogador' });
    }
  },

  // Criar jogador
  async createPlayer(req, res) {
    try {
      const { name, position, goals, assists, appearances, teamId } = req.body;

      const player = await Player.create({
        name,
        position,
        goals,
        assists,
        appearances,
        teamId
      });

      res.status(201).json(player);
    } catch (err) {
      console.error('Erro ao criar jogador:', err); 
      res.status(500).json({ error: 'Erro ao criar jogador' });
    }
  }
};

module.exports = playerController;

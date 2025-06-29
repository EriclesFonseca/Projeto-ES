const Team = require('../models/Team');
const { Player } = require('../models/Team');

const teamController = {
  async listTeams(req, res) {
    try {
      const teams = await Team.findAll({ order: [['ranking', 'ASC']] });
      res.json(teams);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar equipas' });
    }
  },

  async getTeamById(req, res) {
    try {
      const { id } = req.params;
      const team = await Team.findByPk(id, {
        include: Player
      });
      if (!team) return res.status(404).json({ error: 'Equipa não encontrada' });
      res.json(team);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar equipa' });
    }
  },
  // Criar equipa
  async createTeam(req, res) {
    try {
      const { name, coach, logoUrl, ranking, points } = req.body;

      const team = await Team.create({
        name,
        coach,
        logoUrl,
        ranking,
        points
      });

      res.status(201).json(team);
    } catch (err) {
      console.error('Erro ao criar equipa:', err); 
      res.status(500).json({ error: 'Erro ao criar equipa' });
    }
  }
};

module.exports = teamController;

const Game = require('../models/Game');
const Team = require('../models/Team');

const gameController = {
  // Listar jogos 
  async listGames(req, res) {
    try {
      const { status } = req.query;
      const games = await Game.findAll({
        where: status ? { status } : {},
        include: [
          { model: Team, as: 'homeTeam' },
          { model: Team, as: 'awayTeam' }
        ],
        order: [['date', 'DESC']],
      });
      res.json(games);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar jogos' });
    }
  },

  // Obter jogo por ID
  async getGameById(req, res) {
    try {
      const { id } = req.params;
      const game = await Game.findByPk(id, {
        include: [
          { model: Team, as: 'homeTeam' },
          { model: Team, as: 'awayTeam' }
        ]
      });
      if (!game) return res.status(404).json({ error: 'Jogo não encontrado' });
      res.json(game);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar jogo' });
    }
  }, 

  // Criar jogo
  async createGame(req, res) {
    try {
      const { homeTeamId, awayTeamId, homeTeamScore, awayTeamScore, date, location, status } = req.body;

      const game = await Game.create({
        homeTeamId,
        awayTeamId,
        homeTeamScore,
        awayTeamScore,
        date,
        location,
        status
      });

      res.status(201).json(game);
    } catch (err) {
      console.error('Erro ao criar jogo:', err); 
      res.status(500).json({ error: 'Erro ao criar jogo' });
    }
  } 
};

module.exports = gameController;
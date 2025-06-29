const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// GET /api/games
router.get('/', gameController.listGames);

// GET /api/games/:id
router.get('/:id', gameController.getGameById);

// POST /api/games
router.post('/', gameController.createGame);

module.exports = router;

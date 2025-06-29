const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// GET /api/players
router.get('/', playerController.listPlayers);

// GET /api/players/:id
router.get('/:id', playerController.getPlayerById);

// POST /api/players
router.post('/', playerController.createPlayer);

module.exports = router;

const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// GET /api/teams
router.get('/', teamController.listTeams);

// GET /api/teams/:id
router.get('/:id', teamController.getTeamById);

// POST /api/teams
router.post('/', teamController.createTeam);

module.exports = router;

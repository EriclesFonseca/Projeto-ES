const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// POST /api/notifications
router.post('/', notificationController.sendNotification);



module.exports = router;

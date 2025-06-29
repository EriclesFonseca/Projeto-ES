const notificationService = require('../services/notificationService');

const notificationController = {
  async sendNotification(req, res) {
    try {
      const { title, message, userId } = req.body;
      await notificationService.sendToUser(userId, title, message);
      res.status(200).json({ success: true });
    } catch (err) {
      console.error('Erro ao enviar notificação:', err); 
      res.status(500).json({ error: 'Erro ao enviar notificação' });
    }
  }
};

module.exports = notificationController;

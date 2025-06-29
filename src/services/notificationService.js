// Função para enviar notificação a um usuário
async function sendToUser(userId, title, message) {
  //imprime no console
  console.log(`Notificação para usuário ${userId}: [${title}] ${message}`);
}

module.exports = {
  sendToUser
};
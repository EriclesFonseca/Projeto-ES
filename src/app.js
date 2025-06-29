const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

// Carregar variáveis do .env
require('dotenv').config();


const app = express();

app.use(express.json()); 

// Rotas
const gameRoutes = require('./routes/gameRoutes');
const playerRoutes = require('./routes/playerRoutes');
const teamRoutes = require('./routes/teamRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

app.use('/api/games', gameRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/notifications', notificationRoutes);

// Rota padrão
app.get('/', (req, res) => {
  res.send('API de Estatísticas Desportivas funcionando!');
});

// Conexão com o banco + Inicialização do servidor
const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Banco de dados conectado com sucesso!');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });


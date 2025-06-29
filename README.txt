Descrição do Projeto: Sistema de Estatísticas Desportivas

Visão Geral
O Sistema de Estatísticas Desportivas é uma aplicação web desenvolvida para facilitar o gerenciamento de equipas, jogadores, jogos e notificações em competições esportivas. O sistema permite registrar, consultar e administrar informações relevantes de forma simples e eficiente.

Objetivos do Projeto
- Gerenciamento de Equipas: Cadastro, atualização, consulta e remoção de equipas.
- Gerenciamento de Jogadores: Controle dos jogadores, incluindo estatísticas individuais.
- Gerenciamento de Jogos: Registro de partidas, placares e status.
- Notificações: Envio e listagem de notificações para usuários.
- API RESTful: Disponibilização de endpoints para integração com outras aplicações ou front-ends.

Estrutura do Projeto
 1. Modelos (Models)
    - Team: Representa uma equipa.
    - Player: Representa um jogador.
    - Game: Representa um jogo/partida.
    - Notification: Representa uma notificação enviada a um usuário.

 2. Controladores (Controllers)
    - teamController.js
    - playerController.js
    - gameController.js
    - notificationController.js

    Cada controlador lida com operações CRUD (Criar, Ler, Atualizar, Excluir) e lógica de negócio.

 3. Rotas (Routes)
    - teamRoutes.js
    - playerRoutes.js
    - gameRoutes.js
    - notificationRoutes.js

    As rotas mapeiam URLs para funções nos controladores.

 4. Middleware
    - Middleware para parsing de JSON (express.json()) e outros que possam ser necessários.

Fluxo de Trabalho

    1. Cadastro de Equipa/Jogador/Jogo:
    - O usuário envia os dados via POST para a API.
    - O servidor valida e armazena as informações no banco de dados.

    2. Consulta:
    - O usuário pode consultar equipas, jogadores, jogos e notificações via endpoints GET.

    3. Atualização e Remoção:
    - Endpoints PUT/PATCH e DELETE permitem atualizar ou remover registros.

Tecnologias Utilizadas
    - Back-end: Node.js, Express.js
    - Banco de Dados: PostgreSQL
    - ORM: Sequelize

Instalação e Configuração
    1. Clonar o repositório:
       git clone <URL-do-repositório>
       cd sports-stats

    2. Instalar dependências:
       npm install

    3. Configurar banco de dados:
       Ajustar o arquivo de configuração do Sequelize (`src/config/database.js`) conforme necessário.

    4. Executar migrações (se houver):
       npx sequelize-cli db:migrate

    5. Iniciar o servidor:
       cd src
       node app.js

    6. Acessar a aplicação:
       Use o Postman ou outro cliente para testar os endpoints em `http://localhost:3000`.

Considerações Finais
Este projeto serve como base para sistemas de gerenciamento esportivo, podendo ser expandido para incluir autenticação, dashboards, relatórios e integrações com front-end.

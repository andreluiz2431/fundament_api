require('dotenv').config();
const express = require('express');
const fundamentusRoutes = require('./routes/fundamentusRoutes');
const logger = require('./middlewares/logger');
const cors = require('./middlewares/cors');
const config = require('./config/default');
const loginController = require('./controllers/loginController');

const app = express();
const PORT = config.port;

// Middleware para log
app.use(logger);

// Middleware para CORS
app.use(cors);

// Middleware para parsear o corpo da requisição como JSON
app.use(express.json());

// Usa as rotas separadas
app.use('/', fundamentusRoutes);

// Endpoint de login para geração de token JWT
app.post('/login', loginController.login);

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
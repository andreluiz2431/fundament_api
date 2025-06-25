require('dotenv').config();
const express = require('express');
const fundamentusRoutes = require('./routes/fundamentusRoutes');
const logger = require('./middlewares/logger');
const cors = require('./middlewares/cors');
const config = require('./config/default');

const app = express();
const PORT = config.port;

// Middleware para log
app.use(logger);

// Middleware para CORS
app.use(cors);

// Usa as rotas separadas
app.use('/', fundamentusRoutes);

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
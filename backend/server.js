const express = require('express');
const fundamentusRoutes = require('./routes/fundamentusRoutes');
const logger = require('./middlewares/logger');
const config = require('./config/default');

const app = express();
const PORT = config.port;

// Middleware para log
app.use(logger);

// Middleware para habilitar CORS usando config
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', config.cors.origin);
  res.header('Access-Control-Allow-Methods', config.cors.methods);
  res.header('Access-Control-Allow-Headers', config.cors.allowedHeaders);
  next();
});

// Usa as rotas separadas
app.use('/', fundamentusRoutes);

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
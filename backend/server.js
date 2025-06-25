const express = require('express');
const fundamentusRoutes = require('./routes/fundamentusRoutes');
const logger = require('./middlewares/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para log
app.use(logger);

// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Usa as rotas separadas
app.use('/', fundamentusRoutes);

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
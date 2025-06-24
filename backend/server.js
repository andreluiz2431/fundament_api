const express = require('express');
const { getFundamentusData } = require('./fundamentusService.js.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para habilitar CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Rota principal para todos os dados
app.get('/all/:ticker', async (req, res) => {
  const { ticker } = req.params;
  try {
    const data = await getFundamentusData(ticker);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do Fundamentus.' });
  }
});

// Rotas individuais
app.get('/dy/:ticker', async (req, res) => {
  const { ticker } = req.params;
  try {
    const data = await getFundamentusData(ticker);
    res.json({ dy: data.dy });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do Fundamentus.' });
  }
});

app.get('/pvp/:ticker', async (req, res) => {
  const { ticker } = req.params;
  try {
    const data = await getFundamentusData(ticker);
    res.json({ pvp: data.pvp });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do Fundamentus.' });
  }
});

app.get('/nome/:ticker', async (req, res) => {
  const { ticker } = req.params;
  try {
    const data = await getFundamentusData(ticker);
    res.json({ nome: data.nome });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do Fundamentus.' });
  }
});

app.get('/cotacao/:ticker', async (req, res) => {
  const { ticker } = req.params;
  try {
    const data = await getFundamentusData(ticker);
    res.json({ cotacao: data.cotacao });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do Fundamentus.' });
  }
});

// Rota de help
app.get('/help', (req, res) => {
  res.json({
    rotas: {
      '/all/:ticker': 'Retorna todos os dados principais do papel',
      '/dy/:ticker': 'Retorna apenas o Dividend Yield',
      '/pvp/:ticker': 'Retorna apenas o P/VP',
      '/nome/:ticker': 'Retorna apenas o nome do papel',
      '/cotacao/:ticker': 'Retorna apenas a cotação do papel',
      '/help': 'Exibe esta mensagem de ajuda'
    },
    exemplo: '/all/MXRF11'
  });
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
const { getFundamentusData } = require('../services/fundamentusService');

async function getAll(req, res) {
  const { ticker } = req.params;
  try {
    const data = await getFundamentusData(ticker);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do Fundamentus.' });
  }
}

async function getDY(req, res) {
  const { ticker } = req.params;
  try {
    const data = await getFundamentusData(ticker);
    res.json({ dy: data.dy });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do Fundamentus.' });
  }
}

async function getPVP(req, res) {
  const { ticker } = req.params;
  try {
    const data = await getFundamentusData(ticker);
    res.json({ pvp: data.pvp });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do Fundamentus.' });
  }
}

async function getNome(req, res) {
  const { ticker } = req.params;
  try {
    const data = await getFundamentusData(ticker);
    res.json({ nome: data.nome });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do Fundamentus.' });
  }
}

async function getCotacao(req, res) {
  const { ticker } = req.params;
  try {
    const data = await getFundamentusData(ticker);
    res.json({ cotacao: data.cotacao });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados do Fundamentus.' });
  }
}

function getHelp(req, res) {
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
}

module.exports = {
  getAll,
  getDY,
  getPVP,
  getNome,
  getCotacao,
  getHelp
}; 
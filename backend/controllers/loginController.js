const jwt = require('jsonwebtoken');
const config = require('../config/default');

exports.login = (req, res) => {
  const { user, password } = req.body;
  // Exemplo simples: aceita qualquer usuário/senha
  if (!user || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }
  // Em produção, valide usuário/senha corretamente!
  const token = jwt.sign({ user }, config.jwtSecret, { expiresIn: '1h' });
  res.json({ token });
};

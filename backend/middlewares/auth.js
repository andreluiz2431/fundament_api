function auth(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'Não autorizado' });
  }
  // Aqui pode-se adicionar lógica de validação de token/JWT/APIKEY futuramente
  next();
}

module.exports = auth; 
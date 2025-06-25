module.exports = {
  port: process.env.PORT || 3000,
  fundamentusUrl: 'https://www.fundamentus.com.br/detalhes.php?papel=',
  cors: {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization'
  }
}; 
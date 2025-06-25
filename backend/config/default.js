module.exports = {
  port: process.env.PORT || 3000,
  fundamentusUrl: process.env.FUNDAMENTUS_URL,
  cors: {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization'
  }
}; 
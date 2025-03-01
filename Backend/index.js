// index.js

const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

// Middleware para interpretar JSON
app.use(express.json())

// Conectar ao MongoDB
// Pegando a URI do ambiente
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("❌ Erro: MONGO_URI não definida no arquivo .env");
  process.exit(1); // Sai do app se não encontrar a URI
}

// Conectar ao MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log("✅ Conectado ao MongoDB");
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar ao MongoDB:", err);
  });

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('API de Gestão de Pneus funcionando!')
})

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})

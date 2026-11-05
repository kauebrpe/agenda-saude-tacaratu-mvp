
const express = require("express");
const campanhas = require("./campanhas");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static("src/public"));

// Verificação de funcionamento
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    projeto: "Agenda Saúde Tacaratu MVP",
    mensagem: "Servidor funcionando corretamente"
  });
});

// Listar todas as campanhas
app.get("/api/campanhas", (req, res) => {
  res.status(200).json(campanhas);
});

// Consultar campanha por identificador
app.get("/api/campanhas/:id", (req, res) => {
  const id = Number(req.params.id);

  const campanha = campanhas.find((item) => item.id === id);

  if (!campanha) {
    return res.status(404).json({
      erro: "Campanha não encontrada"
    });
  }

  res.status(200).json(campanha);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
  });
}

module.exports = app;
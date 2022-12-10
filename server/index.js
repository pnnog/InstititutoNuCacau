const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

// DADOS DE CONEXÃO AO BANCO DE DADOS
const tabela = 'cadastro'
const db = mysql.createPool({
  host: "localhost",
  user: "root", //USUÁRIO
  password: "cacau", //SENHA
  database: "institutonu", //NOME DO BANCO DE DADOS
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { nome } = req.body;
  const { email } = req.body;
  const { telefone } = req.body;
  const { estado } = req.body;
  const { cnpj } = req.body;
  const { raca } = req.body;
  const { genero } = req.body;
  const { negocio } = req.body;
  const { comoConheceu } = req.body;

  let SQL = `INSERT INTO ${tabela}( nome, email, telefone, estado, cnpj, raca, genero, negocio, comoConheceu ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ? )`;

  db.query(
    SQL,
    [nome, email, telefone, estado, cnpj, raca, genero, negocio, comoConheceu],
    (err, result) => {
      console.log(result);
    }
  );
});

const port = 3001;

app.listen(port, (err) => {
  if (err) {
    console.log(`Erro ao iniciar servidor na porta ${port}`, err);
  }
  console.log("rodando servidor...", port);
});

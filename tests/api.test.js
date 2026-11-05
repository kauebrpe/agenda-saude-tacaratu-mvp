
const { test, after } = require("node:test");
const assert = require("node:assert/strict");
const app = require("../src/server");

const servidor = app.listen(0);
const endereco = servidor.address();
const urlBase = `http://127.0.0.1:${endereco.port}`;

after(() => {
  servidor.close();
});

test("GET /api/health retorna HTTP 200", async () => {
  const resposta = await fetch(`${urlBase}/api/health`);
  const dados = await resposta.json();

  assert.equal(resposta.status, 200);
  assert.equal(dados.status, "ok");
});

test("GET /api/campanhas retorna três campanhas", async () => {
  const resposta = await fetch(`${urlBase}/api/campanhas`);
  const dados = await resposta.json();

  assert.equal(resposta.status, 200);
  assert.ok(Array.isArray(dados));
  assert.ok(dados.length >= 3);
});

test("GET /api/campanhas/1 retorna campanha existente", async () => {
  const resposta = await fetch(`${urlBase}/api/campanhas/1`);
  const dados = await resposta.json();

  assert.equal(resposta.status, 200);
  assert.equal(dados.id, 1);
  assert.ok(dados.titulo);
});

test("GET /api/campanhas/999 retorna HTTP 404", async () => {
  const resposta = await fetch(`${urlBase}/api/campanhas/999`);
  const dados = await resposta.json();

  assert.equal(resposta.status, 404);
  assert.equal(dados.erro, "Campanha não encontrada");
});

test("Campanhas possuem campos obrigatórios", async () => {
  const resposta = await fetch(`${urlBase}/api/campanhas`);
  const campanhas = await resposta.json();

  for (const campanha of campanhas) {
    assert.ok(campanha.id);
    assert.ok(campanha.titulo);
    assert.ok(campanha.categoria);
    assert.ok(campanha.descricao);
    assert.ok(campanha.data);
    assert.ok(campanha.horario);
    assert.ok(campanha.local);
  }
});


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

test("Health informa o projeto", async () => {
  const r = await fetch(`${urlBase}/api/health`);
  const d = await r.json();
  assert.ok(typeof d.projeto === "string" && d.projeto.length > 0);
});

test("Health informa mensagem de funcionamento", async () => {
  const r = await fetch(`${urlBase}/api/health`);
  const d = await r.json();
  assert.ok(typeof d.mensagem === "string" && d.mensagem.length > 0);
});

test("Health utiliza resposta JSON", async () => {
  const r = await fetch(`${urlBase}/api/health`);
  assert.match(r.headers.get("content-type"), /application\/json/);
});

test("Listagem utiliza resposta JSON", async () => {
  const r = await fetch(`${urlBase}/api/campanhas`);
  assert.match(r.headers.get("content-type"), /application\/json/);
});

test("Campanhas possuem identificadores numericos", async () => {
  const r = await fetch(`${urlBase}/api/campanhas`);
  const dados = await r.json();
  assert.ok(dados.every((c) => Number.isInteger(c.id) && c.id > 0));
});

test("Campanhas possuem identificadores unicos", async () => {
  const r = await fetch(`${urlBase}/api/campanhas`);
  const dados = await r.json();
  assert.equal(new Set(dados.map((c) => c.id)).size, dados.length);
});

test("Campanhas possuem titulos nao vazios", async () => {
  const r = await fetch(`${urlBase}/api/campanhas`);
  const dados = await r.json();
  assert.ok(dados.every((c) => typeof c.titulo === "string" && c.titulo.trim()));
});

test("Campanhas possuem categorias nao vazias", async () => {
  const r = await fetch(`${urlBase}/api/campanhas`);
  const dados = await r.json();
  assert.ok(dados.every((c) => typeof c.categoria === "string" && c.categoria.trim()));
});

test("Campanhas possuem descricoes nao vazias", async () => {
  const r = await fetch(`${urlBase}/api/campanhas`);
  const dados = await r.json();
  assert.ok(dados.every((c) => typeof c.descricao === "string" && c.descricao.trim()));
});

test("Campanhas possuem informacoes de data horario e local", async () => {
  const r = await fetch(`${urlBase}/api/campanhas`);
  const dados = await r.json();
  assert.ok(dados.every((c) =>
    ["data", "horario", "local"].every((campo) =>
      typeof c[campo] === "string" && c[campo].trim()
    )
  ));
});

test("Consulta por ID retorna os mesmos dados da listagem", async () => {
  const lista = await (await fetch(`${urlBase}/api/campanhas`)).json();
  const campanha = lista[0];
  assert.ok(campanha);
  const r = await fetch(`${urlBase}/api/campanhas/${campanha.id}`);
  assert.equal(r.status, 200);
  assert.deepEqual(await r.json(), campanha);
});

test("Campanha inexistente retorna erro em JSON", async () => {
  const r = await fetch(`${urlBase}/api/campanhas/999999`);
  assert.equal(r.status, 404);
  assert.match(r.headers.get("content-type"), /application\/json/);
  const d = await r.json();
  assert.ok(typeof d.erro === "string" && d.erro.length > 0);
});

test("Identificador alfabetico retorna HTTP 404", async () => {
  const r = await fetch(`${urlBase}/api/campanhas/abc`);
  assert.equal(r.status, 404);
});

test("Identificador negativo retorna HTTP 404", async () => {
  const r = await fetch(`${urlBase}/api/campanhas/-1`);
  assert.equal(r.status, 404);
});

test("Rota de API desconhecida retorna HTTP 404", async () => {
  const r = await fetch(`${urlBase}/api/rota-inexistente`);
  assert.equal(r.status, 404);
});

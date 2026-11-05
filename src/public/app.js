
const lista = document.getElementById("lista-campanhas");
const mensagem = document.getElementById("mensagem");
const filtro = document.getElementById("filtro-categoria");

let campanhasDisponiveis = [];

function criarElemento(tag, texto, classe = "") {
  const elemento = document.createElement(tag);
  elemento.textContent = texto;
  if (classe) elemento.className = classe;
  return elemento;
}

function mostrarMensagem(texto, erro = false) {
  mensagem.textContent = texto;
  mensagem.className = erro ? "mensagem erro" : "mensagem";
}

function renderizarCampanhas(campanhas) {
  lista.replaceChildren();

  if (campanhas.length === 0) {
    mostrarMensagem(
      campanhasDisponiveis.length === 0
        ? "Nenhuma campanha disponível."
        : "Nenhuma campanha encontrada nesta categoria."
    );
    return;
  }

  mostrarMensagem("");

  campanhas.forEach((campanha) => {
    const cartao = document.createElement("article");
    cartao.className = "campanha";

    const botao = criarElemento(
      "button", "Ver detalhes", "botao-detalhes"
    );

    botao.addEventListener("click", () => {
      mostrarDetalhes(campanha.id);
    });

    cartao.append(
      criarElemento("h3", campanha.titulo),
      criarElemento("span", campanha.categoria, "categoria"),
      criarElemento("p", `Data: ${campanha.data}`),
      criarElemento("p", `Local: ${campanha.local}`),
      botao
    );

    lista.appendChild(cartao);
  });
}

function aplicarFiltro() {
  const resultado = filtro.value === "todas"
    ? campanhasDisponiveis
    : campanhasDisponiveis.filter(
        (item) => item.categoria === filtro.value
      );

  renderizarCampanhas(resultado);
}

function carregarCategorias() {
  const categorias = [
    ...new Set(campanhasDisponiveis.map((item) => item.categoria))
  ];

  filtro.replaceChildren(
    new Option("Todas as categorias", "todas")
  );

  categorias.forEach((categoria) => {
    filtro.add(new Option(categoria, categoria));
  });
}

async function carregarCampanhas() {
  lista.replaceChildren();
  filtro.disabled = true;
  mostrarMensagem("Carregando campanhas...");

  try {
    const resposta = await fetch("/api/campanhas");

    if (!resposta.ok) {
      throw new Error(`Erro HTTP ${resposta.status}`);
    }

    const dados = await resposta.json();

    if (!Array.isArray(dados)) {
      throw new Error("Formato de dados inválido.");
    }

    campanhasDisponiveis = dados;
    carregarCategorias();
    filtro.disabled = false;
    aplicarFiltro();

  } catch (erro) {
    campanhasDisponiveis = [];
    lista.replaceChildren();

    mostrarMensagem(
      "Não foi possível carregar as campanhas. Tente novamente.",
      true
    );

    const tentar = criarElemento(
      "button", "Tentar novamente", "botao-detalhes"
    );

    tentar.addEventListener("click", carregarCampanhas);
    lista.appendChild(tentar);

    console.error(erro);
  }
}

async function mostrarDetalhes(id) {
  lista.replaceChildren();
  mostrarMensagem("Carregando detalhes...");

  try {
    const resposta = await fetch(`/api/campanhas/${id}`);

    if (resposta.status === 404) {
      throw new Error("Campanha não encontrada.");
    }

    if (!resposta.ok) {
      throw new Error("Falha na consulta.");
    }

    const campanha = await resposta.json();

    const cartao = document.createElement("article");
    cartao.className = "campanha detalhe";

    const voltar = criarElemento(
      "button", "Voltar às campanhas", "botao-detalhes"
    );

    voltar.addEventListener("click", aplicarFiltro);

    cartao.append(
      criarElemento("h3", campanha.titulo),
      criarElemento("p", `Categoria: ${campanha.categoria}`),
      criarElemento("p", campanha.descricao),
      criarElemento("p", `Data: ${campanha.data}`),
      criarElemento("p", `Horário: ${campanha.horario}`),
      criarElemento("p", `Local: ${campanha.local}`),
      voltar
    );

    lista.appendChild(cartao);
    mostrarMensagem("");

  } catch (erro) {
    mostrarMensagem(erro.message, true);

    const voltar = criarElemento(
      "button", "Voltar às campanhas", "botao-detalhes"
    );

    voltar.addEventListener("click", aplicarFiltro);
    lista.appendChild(voltar);

    console.error(erro);
  }
}

filtro.addEventListener("change", aplicarFiltro);
carregarCampanhas();

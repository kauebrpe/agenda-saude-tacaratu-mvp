
const lista = document.getElementById("lista-campanhas");
const mensagem = document.getElementById("mensagem");
const filtro = document.getElementById("filtro-categoria");

let campanhasDisponiveis = [];

function criarElemento(tag, texto, classe = "") {
  const elemento = document.createElement(tag);
  elemento.textContent = texto;

  if (classe) {
    elemento.className = classe;
  }

  return elemento;
}

function renderizarCampanhas(campanhas) {
  lista.replaceChildren();

  if (campanhas.length === 0) {
    mensagem.textContent = "Nenhuma campanha encontrada.";
    return;
  }

  mensagem.textContent = "";

  campanhas.forEach((campanha) => {
    const cartao = document.createElement("article");
    cartao.className = "campanha";

    const botao = criarElemento(
      "button",
      "Ver detalhes",
      "botao-detalhes"
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
  const categoria = filtro.value;

  const resultado = categoria === "todas"
    ? campanhasDisponiveis
    : campanhasDisponiveis.filter(
        (campanha) => campanha.categoria === categoria
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
  try {
    mensagem.textContent = "Carregando campanhas...";

    const resposta = await fetch("/api/campanhas");

    if (!resposta.ok) {
      throw new Error("Falha ao carregar campanhas.");
    }

    campanhasDisponiveis = await resposta.json();

    carregarCategorias();
    aplicarFiltro();
  } catch (erro) {
    lista.replaceChildren();
    mensagem.textContent = "Não foi possível carregar as campanhas.";
    console.error(erro);
  }
}

async function mostrarDetalhes(id) {
  try {
    mensagem.textContent = "Carregando detalhes...";

    const resposta = await fetch(`/api/campanhas/${id}`);

    if (!resposta.ok) {
      throw new Error("Campanha não encontrada.");
    }

    const campanha = await resposta.json();

    lista.replaceChildren();

    const cartao = document.createElement("article");
    cartao.className = "campanha detalhe";

    const voltar = criarElemento(
      "button",
      "Voltar às campanhas",
      "botao-detalhes"
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
    mensagem.textContent = "";
  } catch (erro) {
    mensagem.textContent = "Não foi possível carregar os detalhes.";
    console.error(erro);
  }
}

filtro.addEventListener("change", aplicarFiltro);

carregarCampanhas();

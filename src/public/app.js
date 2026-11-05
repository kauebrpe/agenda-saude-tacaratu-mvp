
const lista = document.getElementById("lista-campanhas");
const mensagem = document.getElementById("mensagem");

async function carregarCampanhas() {
  try {
    const resposta = await fetch("/api/campanhas");

    if (!resposta.ok) {
      throw new Error("Falha ao carregar campanhas.");
    }

    const campanhas = await resposta.json();

    lista.replaceChildren();

    if (campanhas.length === 0) {
      mensagem.textContent = "Nenhuma campanha disponível.";
      return;
    }

    mensagem.textContent = "";

    campanhas.forEach((campanha) => {
      const cartao = document.createElement("article");
      cartao.className = "campanha";

      const titulo = document.createElement("h3");
      titulo.textContent = campanha.titulo;

      const categoria = document.createElement("span");
      categoria.className = "categoria";
      categoria.textContent = campanha.categoria;

      const data = document.createElement("p");
      data.textContent = `Data: ${campanha.data}`;

      const local = document.createElement("p");
      local.textContent = `Local: ${campanha.local}`;

      const botao = document.createElement("button");
      botao.className = "botao-detalhes";
      botao.textContent = "Ver detalhes";
      botao.addEventListener("click", () => {
        mostrarDetalhes(campanha.id);
      });

      cartao.append(titulo, categoria, data, local, botao);
      lista.appendChild(cartao);
    });
  } catch (erro) {
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

    const titulo = document.createElement("h3");
    titulo.textContent = campanha.titulo;

    const categoria = document.createElement("p");
    categoria.textContent = `Categoria: ${campanha.categoria}`;

    const descricao = document.createElement("p");
    descricao.textContent = campanha.descricao;

    const data = document.createElement("p");
    data.textContent = `Data: ${campanha.data}`;

    const horario = document.createElement("p");
    horario.textContent = `Horário: ${campanha.horario}`;

    const local = document.createElement("p");
    local.textContent = `Local: ${campanha.local}`;

    const voltar = document.createElement("button");
    voltar.className = "botao-detalhes";
    voltar.textContent = "Voltar às campanhas";
    voltar.addEventListener("click", carregarCampanhas);

    cartao.append(
      titulo, categoria, descricao, data, horario, local, voltar
    );

    lista.appendChild(cartao);
    mensagem.textContent = "";
  } catch (erro) {
    mensagem.textContent = "Não foi possível carregar os detalhes.";
    console.error(erro);
  }
}

carregarCampanhas();

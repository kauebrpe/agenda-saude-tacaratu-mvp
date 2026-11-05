
const lista = document.getElementById("lista-campanhas");
const mensagem = document.getElementById("mensagem");

async function carregarCampanhas() {
  try {
    const resposta = await fetch("/api/campanhas");

    if (!resposta.ok) {
      throw new Error("Falha ao consultar campanhas.");
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

      cartao.append(titulo, categoria, data, local);
      lista.appendChild(cartao);
    });
  } catch (erro) {
    mensagem.textContent = "Não foi possível carregar as campanhas.";
    console.error(erro);
  }
}

carregarCampanhas();

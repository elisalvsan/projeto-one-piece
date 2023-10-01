const botoes = document.querySelector(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desselecionarBotoa();

    botao.classList.add("selecionado");

    desselecionarPersonagem();

    personagens[indice].classList.add("selecionado");
  });
});

function desselecionarBotoa() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(
    ".personagem.selecionado"
  );
  personagemSelecionado.classList.remove("selecionado");
}

const botaoAlterarTema = document.getElementById("botaoAlterarTema");

const body = document.querySelector("body");

const imgBotaoTrocaDeTema = document.querySelector(".imgBotao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modoEscuro");

    body.classList.toggle("modoEscuro");

    if (modoEscuroEstaAtivo) {

        imgBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png");
    } else {

        imgBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png");
    }





});


import { conectaApi } from "./conectaAPI.js";
const formulario = document.querySelector("[data-formulario]");

async function criarFoto(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;

    await conectaApi.criaFoto(nome,valor,imagem);
}

formulario.addEventListener("submit", evento => criarFoto(evento))

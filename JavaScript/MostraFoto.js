import { conectaApi } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(imagem,nome,valor){
    const card =document.createElement("div")
    card.className = "card"
    card.innerHTML = ` <div class="imagem">
        <img src="${imagem}" alt="">
        <h4>${nome}</h4>
    </div>

    <div class="frame2">
        <p>$ ${valor}</p>
            <img id="lixo" src="images/lixeira.png">
</div>
    `
    const lixeira = card.querySelector('#lixo')
    lixeira.addEventListener('click', async() =>{
        card.remove()
    })

    return card
}



async function listaFotos(){
    const listaApi = await conectaApi.listaFotos()
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.imagem,elemento.nome,elemento.valor)
    ))
}
listaFotos()


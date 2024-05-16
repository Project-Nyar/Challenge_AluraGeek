import { conectaApi } from "./conectaAPI.js";
import { apagarCard } from "./apagarCard.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(imagem,nome,valor,id){
    const card =document.createElement("div")
    card.className = "card"
    card.setAttribute('data-id',id)
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
        const id= card.getAttribute('data-id')
        card.remove()
        await apagarCard(id)
    })

    return card
}



async function listaFotos(){
    const listaApi = await conectaApi.listaFotos()
    if(listaApi.length>0){
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.imagem,elemento.nome,elemento.valor, elemento.id)
        ))
    }else{
        const mensagem = document.createElement('h1');
        mensagem.textContent = 'Nenhum produto cadastrado';
        lista.appendChild(mensagem);
    }
    
}
listaFotos()


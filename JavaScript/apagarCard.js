/*import { conectaApi } from "./conectaAPI.js";*/

export async function apagarCard(id){
    
    const conexao = await fetch(`http://localhost:3000/jogos/${id}`, {
        method: 'DELETE'
    });

    return conexao;
}


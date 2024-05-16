async function listaFotos() {
    const conexao = await fetch("http://localhost:3000/jogos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaFoto(nome, valor, imagem) {

    const conexao = await fetch("http://localhost:3000/jogos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor:valor,
            imagem: imagem
        })
    });

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaFotos,
    criaFoto
}
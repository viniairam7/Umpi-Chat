console.log("Script carregado com sucesso!");

function mudarMensagem() {
    console.log("Função mudarMensagem chamada");
    let mensagem = document.getElementById("mensagem");
    if (mensagem.innerText === "Jesus Vive") {
        mensagem.innerText = "Ele está entre nós!";
    } else {
        mensagem.innerText = "Jesus Vive";
    }
}
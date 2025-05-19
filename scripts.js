console.log("Script carregado com sucesso!");

document.addEventListener("DOMContentLoaded", () => {
    const enviarBtn = document.getElementById("enviar");
    const duvidaInput = document.getElementById("duvida");
    const respostaDiv = document.getElementById("resposta");

    enviarBtn.addEventListener("click", () => {
        const pergunta = duvidaInput.value.trim();
        if (pergunta === "") {
            respostaDiv.innerText = "Por favor, digite uma dúvida antes de enviar.";
            return;
        }

        // Aqui seria feita a chamada à API do ChatGPT
        respostaDiv.innerText = "Pensando... (resposta do ChatGPT aparecerá aqui)";

        // Simulação de resposta
        setTimeout(() => {
            respostaDiv.innerText = `🤖 Resposta para: "${pergunta}"\n\n"Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento." - Provérbios 3:5`;
        }, 1000);
    });
});

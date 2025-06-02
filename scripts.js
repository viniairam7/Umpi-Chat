document.addEventListener("DOMContentLoaded", () => {
    const enviarBtn = document.getElementById("enviar");
    const duvidaInput = document.getElementById("duvida");
    const respostaDiv = document.getElementById("resposta");

    enviarBtn.addEventListener("click", async () => {
        const pergunta = duvidaInput.value.trim();
        if (pergunta === "") {
            respostaDiv.innerText = "Por favor, digite uma dúvida.";
            return;
        }

        respostaDiv.innerText = "Pensando...";

        try {
           const response = await fetch("https://bible-chat-4.onrender.com/perguntar", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ pergunta })
});

            const data = await response.json();
console.log("Resposta recebida:", data); // 👈 Adicione isso
respostaDiv.innerText = data.resposta || "Sem resposta recebida.";

        } catch (error) {
            respostaDiv.innerText = "Erro ao buscar resposta.";
            console.error("Erro:", error);
        }
    });
});


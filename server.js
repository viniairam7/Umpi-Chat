require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// OpenRouter SDK
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY, // chave do OpenRouter
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000", // ou seu domínio
    "X-Title": "UMPI Chat Bíblico"
  }
});

app.post("/perguntar", async (req, res) => {
  const { pergunta } = req.body;

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo", // ou outro modelo suportado no OpenRouter
      messages: [
        { role: "system", content: "Você é um assistente bíblico. Responda com base na Bíblia Sagrada Evangélica, versão NVI. Responda informando conexões bíblicas e direcionando para versículos." },
        { role: "user", content: pergunta }
      ],
      temperature: 0.7,
      max_tokens: 300,
    });

    const respostaFinal = chatResponse.choices[0].message.content;
    res.json({ resposta: respostaFinal });
  } catch (err) {
    console.error("Erro ao chamar OpenRouter:", err.response?.data || err.message);
    res.status(500).json({ erro: "Erro ao buscar resposta da IA" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar corpos de solicitação JSON
app.use(bodyParser.json());

// Endpoint para receber perguntas do usuário e enviar respostas
app.post('/api/pergunta', (req, res) => {
    const pergunta = req.body.pergunta;

    // Aqui você processaria a pergunta e geraria uma resposta adequada
    // Por enquanto, vamos apenas retornar uma resposta simples
    const resposta = `Você perguntou: ${pergunta}. Aqui está uma resposta.`;

    // Envie a resposta de volta para o cliente
    res.json({ resposta });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

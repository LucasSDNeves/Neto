require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/api/verificar-senha', (req, res) => {
    const { senhaDigitada } = req.body;

    if (senhaDigitada === process.env.SENHA_MESTRE) {
        return res.json({ valido: true, destino: "../@ - Others_Page's/Roxo/index.html" });
    } else {
        return res.status(401).json({ valido: false, mensagem: "Senha incorreta! Tente novamente." });
    }
});

const PORTA = process.env.PORT || 3000;
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta: ${PORTA}`);
});

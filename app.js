const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());


app.get('/', (_req, res) => {
  res.status(200).json({ response: 'Olá Docker!' });
});

app.listen(PORT, () => { console.log(`Rodando na porta ${PORT}`) });

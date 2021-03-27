const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Home')
});

//params
app.get('/params/:nome', (req, res) => {
    const name = req.params.nome
    res.send(`Seja bem vindo ${name}`)
});

//query params 
app.get('/query/?', (req, res) => {
    const name = req.query["nome"];
    res.send(`Seja bem vindo ${name || 'anonimo'}`)
});


app.listen(process.env.PORT || 8080, (err) => {
    if(err) {
        console.log('error', err)
    } else {
        console.log('App rodando com sucesso')
    }
});

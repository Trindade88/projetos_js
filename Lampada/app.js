const express = require ("express");
const app = express ();
const PORTA = 8081;

app.use (express.static('public')) ;

// Rotas
app.get ('/',(req, res) => {
    res.sendFile (__dirname + "/public/html/index.html");
});


// Serviços
app.listen(PORTA, () => {
    console.log (`O servidor esta sendo executado na ${PORTA}`);
});
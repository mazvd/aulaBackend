const express = require('express');

const app = express();
app.use(express.json()) //para nao dar erro no run dev em post

app.get('/', function(req, res){
    res.send("home");
});
app.post('/', function(req, res){
    console.log(req.body); //requisição do body pra ler os dados
    res.status(204).end();
})
app.put('/', function(req, res){
    res.status(204).end();
});
app.delete('/', function(req, res){
    res.status(204).end();
})
app.listen(3000, function() {
    console.log("API está ON!");
});
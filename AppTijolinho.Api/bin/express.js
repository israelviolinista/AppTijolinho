const express= require('express');
const bodyParser=require('body-parser');

//routes
const categoriaRouter=require('../routes/categoria-router');
const parceiroRouter=require('../routes/parceiro-router');

///invocando a Api
const app= express();


//configuração do parser Json

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


/////configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/parceiro', parceiroRouter);
//exportando APi
module.exports=app;
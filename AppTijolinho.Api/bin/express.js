const express= require('express');
const bodyParser=require('body-parser');

//routes
const categoriaRouter=require('../routes/categoria-router');
const parceiroRouter=require('../routes/parceiro-router');
const mongoose= require('mongoose');

const variables= require('../bin/configuration/variables')

///invocando a Api
const app= express();


//configuração do parser Json

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//configurando conexão bd
mongoose.connect(variables.Database.connection)
.then(()=>{
    console.log('conectado com sucesso mongo')
   // app.listen(3000)
    })
    .catch((erro) =>console.log(erro));
//mongodb://atlas-sql-627e3b96c6a2454bf4f36bb7-msovb.a.query.mongodb.net/app_tijolinho?ssl=true&authSource=admin


/////configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/parceiro', parceiroRouter);
//exportando APi
module.exports=app;
'use strict'
const app=require('../AppTijolinho.Api/bin/express');
const variables= require('../AppTijolinho.Api/bin/configuration/variables');
app.listen(variables.Api.port,() =>{
    console.info(`Api reiniciada com sucesso! Porta: ${variables.Api.port}`);
});
'use strict'
function parceiroController(){

}
parceiroController.prototype.post= async(req,res)=>{};

parceiroController.prototype.put= async(req,res)=>{};

parceiroController.prototype.get= async(req,res)=>{

    res.status(200).send('Funcionando.., parceiros');
};

parceiroController.prototype.getById= async(req,res)=>{
    res.status(200).send(`o Id passado foi : ${req.params.id}`);
};

parceiroController.prototype.delete= async(req,res)=>{};

module.exports= parceiroController;
module.exports = (app) =>{
    
    const Usuario = require('../model/Usuario');

    app.route("/cadastro").post(function(req, res){
        let usuario = new Usuario();
        // usuario.nome = req.body.usuario.nome;
        // usuario.dataNascimento = req.body.usuario.dataNascimento;
        // usuario.permissoes = req.body.usuario.permissoes;
        console.log(req.body); 
    });
    app.get("/", function(req, res){
         
    })
  
}
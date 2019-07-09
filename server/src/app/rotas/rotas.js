
    const UsuarioController = require('../controller/UsuarioController');
    const usuarioController = new UsuarioController();

module.exports = (app) =>{
    
    const rotasUsuario = UsuarioController.rotas(); 
    
    app.post(rotasUsuario.cadastro, usuarioController.cadastro());

    app.get("/", function(req, res){
         
    })
  
}

    const UsuarioController = require('../controllers/UsuarioController');
    const usuarioController = new UsuarioController();

module.exports = (app) =>{
    
    const rotasUsuario = UsuarioController.rotas(); 

    app.post(rotasUsuario.cadastro, usuarioController.cadastro());
    app.get(rotasUsuario.cadastro, usuarioController.getPermissoesParaCadastro());
    app.get("/", function(req, res){
         
    })
  
}
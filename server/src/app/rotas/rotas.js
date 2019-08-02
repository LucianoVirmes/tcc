
const UsuarioController = require('../controllers/UsuarioController.js');
const usuarioController = new UsuarioController();
const ProdutoController = require('../controllers/ProdutoController.js')
const produtoController = new ProdutoController();

module.exports = (app) =>{
    
    const rotasUsuario = UsuarioController.rotas(); 
    const rotasProduto = ProdutoController.rotas();

    app.post(rotasUsuario.cadastro, usuarioController.cadastro());
    app.get(rotasUsuario.cadastro, usuarioController.getPermissoesParaCadastro());
    app.get(rotasUsuario.lista, usuarioController.getUsuarios())
    app.post(rotasProduto.cadastro, produtoController.cadastro());
    app.get(rotasProduto.lista, produtoController.lista());
    app.get(rotasUsuario.visualiza, usuarioController.getUsuarioById());
    app.get("/", function(req, res){
         
    })
  
}
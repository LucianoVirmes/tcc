
const UsuarioController = require('../controllers/UsuarioController.js');
const usuarioController = new UsuarioController();
const ProdutoController = require('../controllers/ProdutoController.js')
const produtoController = new ProdutoController();
const MotoristaController = require('../controllers/MotoristaController.js');
const motoristaController = new MotoristaController();
const EmpresaController = require('../controllers/EmpresaController.js');
const empresaController = new EmpresaController();

module.exports = (app) =>{
    
    const rotasUsuario = UsuarioController.rotas(); 
    const rotasProduto = ProdutoController.rotas();
    const rotasMotorista = MotoristaController.rotas();
    const rotasEmpresa = EmpresaController.rotas();

    //usuario
    app.post(rotasUsuario.cadastro, usuarioController.cadastro());
    app.get(rotasUsuario.cadastro, usuarioController.getPermissoesParaCadastro());
    app.get(rotasUsuario.lista, usuarioController.getUsuarios())
    app.get(rotasUsuario.visualiza, usuarioController.getUsuarioById());
    app.post(rotasUsuario.excluir, usuarioController.inativar());
    //produto
    app.post(rotasProduto.cadastro, produtoController.cadastro());
    app.get(rotasProduto.lista, produtoController.lista());
    //motorista
    app.post(rotasMotorista.cadastro, motoristaController.cadastrar());
    app.get(rotasMotorista.cadastro, motoristaController.novo());
    app.get(rotasMotorista.lista, motoristaController.getMotoristas());
    app.get(rotasMotorista.visualizar, motoristaController.getMotorista());
    app.post(rotasMotorista.alterar, motoristaController.alterar());
    app.post(rotasMotorista.remover, motoristaController.removeMotorista());
    //empresa
    app.post(rotasEmpresa.cadastrar, empresaController.cadastrar());
    app.get(rotasEmpresa.listar, empresaController.listar());
    app.post(rotasEmpresa.alterar, empresaController.alterar());
    app.get(rotasEmpresa.visualizar, empresaController.visualizar());
    app.post(rotasEmpresa.remover, empresaController.remover());

    app.get("/", function(req, res){
         
    })
  
}
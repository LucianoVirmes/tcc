
const UsuarioController = require('../controllers/UsuarioController.js');
const usuarioController = new UsuarioController();
const ProdutoController = require('../controllers/ProdutoController.js')
const produtoController = new ProdutoController();
const MotoristaController = require('../controllers/MotoristaController.js');
const motoristaController = new MotoristaController();
const EmpresaController = require('../controllers/EmpresaController.js');
const empresaController = new EmpresaController();
const VeiculoController = require('../controllers/VeiculoController.js');
const veiculoController = new VeiculoController();
const PesagemController = require('../controllers/PesagemController.js');
const pesagemController = new PesagemController();
module.exports = (app) => {

    const rotasUsuario = UsuarioController.rotas();
    const rotasProduto = ProdutoController.rotas();
    const rotasMotorista = MotoristaController.rotas();
    const rotasEmpresa = EmpresaController.rotas();
    const rotasVeiculo = VeiculoController.rotas();
    const rotasPesagem = PesagemController.rotas();

    //usuario
    app.post(rotasUsuario.usuario, usuarioController.cadastro());
    app.put(rotasUsuario.usuario, usuarioController.cadastro());
    app.get(rotasUsuario.listaPermissoes, usuarioController.getPermissoesParaCadastro());
    app.get(rotasUsuario.usuario, usuarioController.getUsuarios())
    app.get(rotasUsuario.usuarioId, usuarioController.getUsuarioById());
    app.delete(rotasUsuario.usuarioId, usuarioController.inativar());
    //produto
    app.post(rotasProduto.produto, produtoController.cadastro());
    app.get(rotasProduto.produto, produtoController.lista());
    app.get(rotasProduto.produtoId, produtoController.visualiza());
    app.put(rotasProduto.produtoId, produtoController.alterar());
    app.delete(rotasProduto.produtoId, produtoController.deleta());
    //motorista
    app.post(rotasMotorista.motorista, motoristaController.cadastrar());
    app.get(rotasMotorista.motorista, motoristaController.getMotoristas());
    app.get(rotasMotorista.motoristaId, motoristaController.getMotorista());
    app.put(rotasMotorista.motorista, motoristaController.alterar());
    app.delete(rotasMotorista.motoristaId, motoristaController.removeMotorista());
    app.post(rotasMotorista.motoristaEmpresa, motoristaController.addEmpresa());
    app.get(rotasMotorista.motoristaEmpresaLista, motoristaController.getEmpresas());

    //empresa
    app.post(rotasEmpresa.empresa, empresaController.cadastrar());
    app.get(rotasEmpresa.empresa, empresaController.listar());
    app.put(rotasEmpresa.empresaId, empresaController.alterar());
    app.get(rotasEmpresa.empresaId, empresaController.visualizar());
    app.delete(rotasEmpresa.empresaId, empresaController.remover());
    //veiculo
    app.post(rotasVeiculo.veiculo, veiculoController.cadastro());
    app.get(rotasVeiculo.veiculo, veiculoController.listar());
    app.put(rotasVeiculo.veiculo, veiculoController.alterar());
    app.delete(rotasVeiculo.veiculoId, veiculoController.deletar());
    app.get(rotasVeiculo.veiculoId, veiculoController.visualizar());
    app.get(rotasVeiculo.veiculoPlaca, veiculoController.autocompletePlaca());
    //pesagem
    app.get(rotasPesagem.pesagem, pesagemController.listar());
    app.post(rotasPesagem.pesagem, pesagemController.salvar());
    app.get(rotasPesagem.pesar, pesagemController.pesar());

    app.get("/", function (req, res) {

    })

}
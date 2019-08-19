const VeiculoService = require('../services/VeiculoService.js');
const service = new VeiculoService();

class VeiculoController {
    static rotas() {
        return {
            veiculo: "/veiculo",
            veiculoId: "/veiculo/:id"
        }
    }

    cadastro() {
        return (req, res) => {
            service.salvar(req.body).then(success => res.sendStatus(200), err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }

    alterar() {
        return (req, res) => {
            service.alterar(req.body).then(success => res.sendStatus(200), err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }

    deletar() {
        return (req, res) => {
            service.deletar(req.params.id).then(success => res.sendStatus(200), err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }

    listar() {
        return (req, res) => {
            service.findAll().then(veiculos => res.send(veiculos), err => {
                res.sendStatus(500);
                console.log(err);
            })
        }
    }

    visualizar(id){
        return (req, res) => {
            service.getVeiculo(req.params.id).then( veiculo => res.send(veiculo), err =>{
                res.sendStatus(500);
                console.log(err);
            })
        }
    }

}

module.exports = VeiculoController;
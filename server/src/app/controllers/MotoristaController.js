const MorotistaService = require('../services/MotoristaService.js');
const service = new MorotistaService();

class MotoristaController {

    static rotas(){
        return {
            cadastro: "/motorista/cadastro",
            alterar: "/motorista/alterar",
            lista: "/motorista/lista",
            visualizar: "/motorista/visualizar"
        }
    }

    getMotorista(){
        return (req, res) => {
            service.getById(req.param('id')).then(morotista => {
                res.send(morotista);
            }, err => {
                console.log(err);
                res.sendStatus(500);
            });
        }
    }

    novo(){
        return (req, res) => {
            service.salvaOuAltera(req.body).then( success => {
                res.sendStatus(200);
            }, err => {
                console.log(err);
                res.sendStatus(500);
            });
        }
    }

    alterar(){
        return (req, res) => {
            service.salvaOuAltera(req.body).then(sucess => {
                res.sendStatus(200);
            }, err => {
                console.log(err);
                res.sendStatus(500);
            });
        }
    }

    getMotoristas(){
        return (req, res) => {
            service.getAll().then(motoristas => {
                res.send(motoristas);
            }, err => {
                res.sendStatus(500);
                console.log(err);
            });
        }
    }

}

module.exports = MotoristaController;
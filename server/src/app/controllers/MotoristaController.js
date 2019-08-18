const MorotistaService = require('../services/MotoristaService.js');
const EmpresaService = require('../services/EmpresaService.js');

const empresaService = new EmpresaService();
const service = new MorotistaService();

class MotoristaController {

    static rotas() {
        return {
            motorista: "/motorista",
            motoristaId: "/motorista/:id",
            motoristaEmpresaLista: "/motorista/empresa/lista",
            motoristaEmpresa: "/motorista/empresa"
        }
    }

    getMotorista() {
        return (req, res) => {
            service.getById(req.param('id')).then(morotista => {
                res.send(morotista);
            }, err => {
                console.log(err);
                res.sendStatus(500);
            });
        }
    }

    cadastrar() {
        return (req, res) => {
            service.salvaOuAltera(req.body).then(success => {
                res.sendStatus(200);
            }, err => {
                console.log(err);
                res.sendStatus(500);
            });
        }
    }

    alterar() {
        return (req, res) => {
            service.salvaOuAltera(req.body).then(sucess => {
                res.sendStatus(200);
            }, err => {
                console.log(err);
                res.sendStatus(500);
            });
        }
    }

    getMotoristas() {
        return (req, res) => {
            service.getAll().then(motoristas => {
                res.send(motoristas);
            }, err => {
                res.sendStatus(500);
                console.log(err);
            });
        }
    }

    removeMotorista() {
        return (req, res) => {
            service.deleteById(req.param('id')).then(success => {
                res.sendStatus(200);
            }, err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }

    addEmpresa(){
        return (req, res) => {
            service.addEmpresa(req.body).then(sucess => {
                res.sendStatus(200);
            }, err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }

    getEmpresas(){
        return (req, res) => {
            service.getEmpresas(parseInt(req.query.id)).then(empresas=> {
                res.send(empresas);
            }, err => {
                console.log(err);
                res.sendStatus(404);
            })
        }
    }

}

module.exports = MotoristaController;
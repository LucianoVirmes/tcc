const MorotistaService = require('../services/MotoristaService.js');

const service = new MorotistaService();

class MotoristaController {

    static rotas() {
        return {
            motorista: "/motorista",
            motoristaId: "/motorista/:id",
            motoristaEmpresaLista: "/motorista/empresa/lista",
            motoristaEmpresa: "/motorista/empresa",
            removeEmpresa: "/motorista/remover-empresa",
            motoristaAutocomplete: "/motorista-autocomplete/motorista",
            motoristaAutocompleteByEmpresa: "/motorista-autocomplete/empresa",
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

    removeEmpresa() {
        return (req, res ) => {
            service.removeEmpresa(req.body.idEmpresa, req.body.idMotorista).then(sucess => {
                res.sendStatus(200);
            }, err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }

    addEmpresa() {
        return (req, res) => {
            service.addEmpresa(req.body).then(sucess => {
                res.sendStatus(200);
            }, err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }

    getEmpresas() {
        return (req, res) => {
            service.getEmpresas(parseInt(req.query.id)).then(empresas => {
                res.send(empresas);
            }, err => {
                console.log(err);
                res.sendStatus(404);
            })
        }
    }

    getAutocomplete() {
        return (req, res) => {
            service.getAutocomplete(req.query.nome).then(motoristas => res.send(motoristas), err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }

    getAutocompleteByEmpresa() {
        return (req, res) => {
            service.getAutocompleteByEmpresa(req.query.nome, req.query.idEmpresa).then(motoristas => res.send(motoristas), err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }

}

module.exports = MotoristaController;
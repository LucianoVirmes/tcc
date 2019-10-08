const EmpresaService = require('../services/EmpresaService.js');
const service = new EmpresaService();

class EmpresaController {

    static rotas() {
        return {
            empresa: "/empresa",
            empresaId: "/empresa/:id",
            empresaVeiculo: "/empresa-veiculo",
            empresaAutocomplete: "/empresa-autocomplete/empresa",
            empresaAutocompleteByVeiculo: "/empresa-autocomplete/veiculo"
        }
    }

    listar() {
        return (req, res) => {
            service.getEmpresas().then(empresas => {
                res.send(empresas);
            }, error => {
                console.log(error);
                res.sendStatus(500);
            });
        }
    }

    alterar() {
        return (req, res) => {
            service.salvaOuAltera(req.body).then(success => {
                res.sendStatus(200);
            }, error => {
                res.sendStatus(500);
                console.log(error);
            })
        }
    }

    cadastrar() {
        return (req, res) => {
            service.salvaOuAltera(req.body).then(sucess => {
                res.sendStatus(200);
            }, error => {
                res.sendStatus(500);
                console.log(error);
            })
        }
    }

    remover() {
        return (req, res) => {
            service.remover(req.param('id')).then(success => {
                res.sendStatus(200);
            }, error => {
                res.sendStatus(500);
                console.log(error);
            })
        }
    }

    visualizar() {
        return (req, res) => {
            service.visualizar(req.param('id')).then(empresa => {
                res.send(empresa);
            }, error => {
                res.sendStatus(500);
                console.log(error);
            })
        }
    }

    getVeiculos() {
        return (req, res) => {
            service.getVeiculos(req.query.id).then(veiculos => res.send(veiculos), err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }

    addVeiculo() {
        return (req, res) => {
            service.addVeiculo(req.body).then(success => res.sendStatus(200), err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }

    autocomplete() {
        return (req, res) => {
            service.getEmpresasByNome(req.query.nome).then(empresas => 
                res.send(empresas), err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }

    autocompleteByVeiculo() {
        return (req, res) => {
            service.getEmpresasByNomeAndVeiculos(req.query.nome, req.query.idVeiculo)
                .then(empresas => res.send(empresas), err => {
                    console.log(err);
                    res.sendStatus(500);
                })
        }

    }
}

module.exports = EmpresaController;

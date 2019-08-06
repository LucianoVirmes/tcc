const EmpresaService = require('../services/EmpresaService.js');
const service = new EmpresaService();

class EmpresaController {

    static rotas(){
        return {
            lista: "empresa/listar",
            visualiza: "empresa/visualizar",
            remove: "empresa/remover",
            altera: "empresa/alterar",
            cadastrar: "empresa/cadastrar"
        }
    }

    listar(){
        return (req, res) => {
            service.getEmpresas().then(empresas => {
                res.send(empresas);
            }, error => {
                console.log(error);
                res.sendStatus(500);
            });
        }
    }

    alterar(){
        return (req, res) => {
            service.salvaOuAltera(req.body).then(success => {
                res.sendStatus(200);
            }, error => {
                res.sendStatus(500);
                console.log(error);
            })
        }
    }

    cadastrar(){
        return (req, res) => {
            service.salvaOuAltera(req.body).then(sucess => {
                res.sendStatus(200);
            }, error => {
                res.sendStatus(500);
                console.log(error);
            })
        }
    }

    remover(){
        return (req, res) => {
            service.remover(req.param('id')).then(success =>{
                res.sendStatus(200);
            }, error => {
                res.sendStatus(500);
                console.log(error);
            })
        }
    }
}

module.exports = EmpresaController;

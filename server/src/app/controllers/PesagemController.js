const PesagemService = require('../services/PesagemService.js');
const service = new PesagemService();

class PesagemController {

    static rotas() {
        return {
            pesagem: '/pesagem'
        }
    }

    salvar() {
        return (req, res) => {
            service.salvar(req.body).then(success => res.sendStatus(200), err => {
                res.sendStatus(500);
                console.log(err);
            })
        }
    }

    listar(){
        return (req, res) => {
            service.listar().then(pesagens =>  res.send(pesagens), err => {
                res.sendStatus(500);
                console.log(err);
            })
        }
    }

}

module.exports = PesagemController;
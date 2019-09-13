const PesagemService = require('../services/PesagemService.js');
const service = new PesagemService();
var path = require('path');
var mime = require('mime');
var fs = require('fs');

class PesagemController {

    static rotas() {
        return {
            pesagem: '/pesagem',
            pesar: '/pesar',
            conexao: '/conexao',
            relatorio: '/relatorio'
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

    listar() {
        return (req, res) => {
            service.listar().then(pesagens => res.send(pesagens), err => {
                res.sendStatus(500);
                console.log(err);
            })
        }
    }

    pesar() {
        return (req, res) => {
            service.pesar().then(data => res.send(data));
        }
    }

    verificaConexao() {
        return (req, res) => {
            service.verificarConexao('/dev/ttyUSB0').then( connected => res.send(connected));
        }
    }

    relatorio() {
       return (req, res) => {
        service.geraRelatorio().then(redable => {
            redable.pipe(res);
        });
    }
    }
}

module.exports = PesagemController;
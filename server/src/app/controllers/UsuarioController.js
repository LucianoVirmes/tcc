const UsuarioService = require('../services/UsuarioService');
const service = new UsuarioService();

class UsuarioController {

    static rotas() {
        return {
            lista: '/usuario/lista',
            cadastro: '/usuario/cadastro',
            visualiza: '/usuario/visualizar',
            excluir: '/usuario/inativar'
        }
    }

    getUsuarios() {
        return (req, res) => {
            service.getUsuarios().then(usuarios => {
                res.send(usuarios);
            }, error => {
                console.log(error);
                res.sendStatus(500);
            });
        }
    }

    cadastro() {
        return (req, res) => {
            service.cadastrar(req.body).then(status => {
                res.sendStatus(200);
            }, erro => {
                console.log(erro);
                res.sendStatus(500);
            });
        }
    }

    inativar() {
        return (req, res) => {
            service.inativar(parseInt(req.body.id)).then(status => {
                res.sendStatus(200);
            }, erro => {
                console.log(erro);
                res.sendStatus(500);
            })
        }
    }

    getPermissoesParaCadastro() {
        return (req, res) => {
            let permissoes = require('../models/PermissoesEnum.js')
            res.send(permissoes);
        }
    }

    getUsuarioById() {
        return (req, res) => {
            service.getUsuarioById(req.param("codigo")).then(usuario => {
                res.send(usuario);
            }, err => res.sendStatus(500));
        }
    }
}

module.exports = UsuarioController;
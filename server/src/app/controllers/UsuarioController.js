const UsuarioService = require('../services/UsuarioService');
const service = new UsuarioService();

class UsuarioController {

    static rotas() {
        return {
            listaPermissoes: '/usuario/listaPermissoes',
            usuario: '/usuario',
            usuarioId: '/usuario/:id'
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
            service.inativar(parseInt(req.params.id)).then(status => {
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
            service.getUsuarioById(req.params.id).then(usuario => {
                res.send(usuario);
            }, err => res.sendStatus(500));
        }
    }
}

module.exports = UsuarioController;
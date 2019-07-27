const UsuarioService = require('../services/UsuarioService');
const service = new UsuarioService();

class UsuarioController {
    
    static rotas(){
        return {
            lista: '/lista',
            cadastro: '/cadastro'
        }
    }

    getUsuarios(){
        return (req, res) => {
            res.send(service.getUsuarios());
        }
    }
    
    cadastro() {
        return (req, res) => {
            service.cadastrar(req.body).then(status => {
                res.sendStatus(200);
            }, erro => {
                res.sendStatus(500);
            });
        }
    }

    getPermissoesParaCadastro(){
        return (req, res) => {
            let permissoes = require('../models/PermissoesEnum.js')
            res.send(permissoes);
        }
    }
}

module.exports = UsuarioController;
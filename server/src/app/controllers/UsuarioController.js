const UsuarioService = require('../service/UsuarioService');
const service = new UsuarioService();

class UsuarioController {
    
    static rotas(){
        return {
            lista: '/',
            cadastro: '/cadastro'
        }
    }

    cadastro() {
        return (req, res) => {
            service.cadastrar(req.body);
        }
    }

}

module.exports = UsuarioController;
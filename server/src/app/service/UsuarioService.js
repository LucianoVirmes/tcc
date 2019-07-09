const UsuarioRepository = require('../repository/UsuarioRepository');
const repository = new UsuarioRepository();
class UsuarioService {

    cadastrar(usuario){
        repository.inserir(usuario);
    }

}

module.exports = UsuarioService;
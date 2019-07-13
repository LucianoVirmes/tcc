const Usuario = require('../models/Usuario.js');

class UsuarioService {

    cadastrar(usuario){
        repository.inserir(usuario);
    }
    
    getUsuarios(){
        Usuario.findAll().then(customers => {
            return customers;
          });
    }

}

module.exports = UsuarioService;
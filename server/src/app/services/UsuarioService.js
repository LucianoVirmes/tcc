const db = require('../../../config/configDb');
const Usuario = db.usuario;

class UsuarioService {

    cadastrar(usuario){
        if(!usuario.dataAdmissao){
            usuario.dataAdmissao = Date.now();
        }
        
        Usuario.create(usuario);
    }
    
    getUsuarios(){
        Usuario.findAll().then(usuarios => {
            return usuarios;
          });
    }

}

module.exports = UsuarioService;
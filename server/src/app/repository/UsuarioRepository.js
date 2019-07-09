const Usuario = require('../models/Usuario');

class UsuarioRepository {
        
    inserir(usuario){
            Usuario.build(usuario).save().then(()=>{
            console.log('salvo com sucesso');
        }).catch(error => {
            console.log(error);
        })
    }
}

module.exports = UsuarioRepository;
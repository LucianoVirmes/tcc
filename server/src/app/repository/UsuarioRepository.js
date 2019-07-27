const db = require('../../../config/configDb');
const Usuario = db.usuario;
const Pessoa = db.pessoa;

class UsuarioRepository {
    
    findAllCompleto(){
       return Usuario.findAll({
            include: [{
                model: Pessoa,
                as: 'pessoa'
            }]
        });
    }

    save(usuario){
        return Pessoa.create(usuario.pessoa).then(pessoa => {
                usuario.codpessoa = pessoa.id;
                Usuario.create(usuario)
            });
    }
}

module.exports = UsuarioRepository;
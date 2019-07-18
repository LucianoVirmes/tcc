const db = require('../../../config/configDb');
const Usuario = db.usuario;
class UsuarioService {

    cadastrar(req){
        if(!req.dataAdmissao){
            req.dataAdmissao = Date.now();
        }
        
        let usuario = {};
        let pessoa = {};
        pessoa.nome = req.nome;
        pessoa.dataNascimento = new Date(req.dataNascimento);
        usuario.dataAdmissao = req.dataAdmissao;
        usuario.permissoes = req.permissoes;

        usuario.pessoa = pessoa;
        Usuario.salvar(usuario);
    
    }
    
    getUsuarios(){
        Usuario.findAll().then(usuarios => {
            return usuarios;
          });
    }

}

module.exports = UsuarioService;
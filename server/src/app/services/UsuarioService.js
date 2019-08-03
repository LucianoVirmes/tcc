const UsuarioRepository = require('../repository/UsuarioRepository.js');
const repository = new UsuarioRepository();
class UsuarioService {

    
    cadastrar(req) {
      
        if(!req.dataAdmissao){
            req.dataAdmissao = Date.now();
        }
        
        let usuario = {};
        let pessoa = {};
        
        pessoa.nome = req.nome;
        pessoa.dataNascimento = new Date(req.dataNascimento);
        
        usuario.id = parseInt(req.codigo);
        usuario.dataAdmissao = req.dataAdmissao;
        usuario.permissoes = req.permissoes;
        usuario.pessoa = pessoa;

        if(usuario.id){
            return repository.update(usuario);
        } else {
            return repository.save(usuario);
        }
    }

    inativar(codUsuario) {
        return repository.inativar(codUsuario);
    }

    getUsuarios(){
        return repository.findAllCompleto();
    }

    getUsuarioById(codPessoa){
        return repository.findById(codPessoa);
    }
}

module.exports = UsuarioService;
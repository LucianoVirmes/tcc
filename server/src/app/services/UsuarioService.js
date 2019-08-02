const UsuarioRepository = require('../repository/UsuarioRepository.js');
const repository = new UsuarioRepository();
class UsuarioService {

    
    cadastrar = (req) => {
      
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

        return repository.save(usuario);
}
    
    getUsuarios(){
        return repository.findAllCompleto();
    }

    getUsuarioById(codPessoa){
        return repository.findById(codPessoa);
    }
}

module.exports = UsuarioService;
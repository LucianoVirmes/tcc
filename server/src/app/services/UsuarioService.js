const db = require('../../../config/configDb');
const Usuario = db.usuario;
const Pessoa = db.pessoa;
class UsuarioService {

    
    cadastrar = (req) => {
       return new Promise((resolve, reject) => {

        if(!req.dataAdmissao){
            req.dataAdmissao = Date.now();
        }
        
        let usuario = {};
        let pessoa = {};
        pessoa.nome = req.nome;
        pessoa.dataNascimento = new Date(req.dataNascimento);
        usuario.dataAdmissao = req.dataAdmissao;
        usuario.permissoes = req.permissoes;
       
        Pessoa.create(pessoa).then(pessoa => {
            usuario.codpessoa = pessoa.id;
            Usuario.create(usuario);

            resolve();
        },  error => {
            console.log(error);
            reject();
        });
    });
}
    
    getUsuarios(){
        Usuario.findAll().then(usuarios => {
            return usuarios;
          });
    }

}

module.exports = UsuarioService;
const db = require('../../../config/configDb');
const Usuario = db.usuario;
const Pessoa = db.pessoa;

class UsuarioRepository {

    findAllCompleto() {
        return Usuario.findAll({
            include: [{
                model: Pessoa,
                as: 'pessoa'
            }]
        });
    }

    save(usuario) {
        return Pessoa.create(usuario.pessoa).then(pessoa => {
            usuario.codpessoa = pessoa.id;
            Usuario.create(usuario)
        });
    }
    update(usuario) {
        return this.findById(usuario.id).then(usuarioBanco => {

            if (usuarioBanco) {
                usuarioBanco.update({
                    permissoes: usuario.permissoes
                }
                ).then(() => {
                    Pessoa.update({
                        nome: usuario.pessoa.nome,
                        dataNascimento: usuario.pessoa.dataNascimento,
                    }, {
                            where: { id: usuarioBanco.codpessoa }
                        })
                })
            }

        })
    }

    inativar(codUsuario) {
        return this.findById(codUsuario).then(usuarioBanco => {
            usuarioBanco.update({
                dataDemissao: Date.now()
            });
        })
    }

    findById(codPessoa) {
        return Usuario.findByPk(codPessoa, {
            include: [{
                model: Pessoa,
                as: 'pessoa'
            }]
        });
    }
}

module.exports = UsuarioRepository;
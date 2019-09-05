
export default class {
    constructor(codigo = null, nome = '', dataNascimento = '', cpf = '',
        telefone = '', email = '', permissao = '', login = '', senha = '') {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.permissao = permissao;
        this.codigo = codigo;
        this.login = login;
        this.senha = senha;
    }

}


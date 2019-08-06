const db = require('../../../config/configDb.js');
const Empresa = db.empresa;

class EmpresaRepository {

    save(empresa){
        return Empresa.create(empresa);
    }

    findAll(){
        return Empresa.findAll();
    }

    update(empresa){
        return this.findOneByPk(empresa.id).then(empresaBanco => {
            empresaBanco.update({
                nome: empresa.nome,
                cnpj: empresa.cnpj
            })
        })
    }

    findOneByPk(codEmpresa){
        return Empresa.findByPk(codEmpresa);
    }

    deleteOne(codEmpresa){
        return Empresa.destroy({
            where: {id: codEmpresa}
        })
    }

}

module.exports = EmpresaRepository;
const db = require('../../../config/configDb.js');
const Empresa = db.empresa;
const Motorista = db.motorista;
const Op = db.Sequelize.Op;

class EmpresaRepository {

    save(empresa) {
        return Empresa.create(empresa);
    }

    findAll() {
        return Empresa.findAll();
    }

    update(empresa) {
        return this.findOneByPk(empresa.id).then(empresaBanco => {
            empresaBanco.update({
                nome: empresa.nome,
                cnpj: empresa.cnpj
            })
        })
    }

    findOneByPk(codEmpresa) {
        return Empresa.findByPk(codEmpresa);
    }

    deleteOne(codEmpresa) {
        return Empresa.destroy({
            where: { id: codEmpresa }
        })
    }

    findByNome(nomeEmpresa) {
        return Empresa.findAll({
            where: {
                nome: {
                    [Op.like]: '%' + nomeEmpresa + '%'
                }
            }
        })
    }

   

}

module.exports = EmpresaRepository;
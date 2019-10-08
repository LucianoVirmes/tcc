const db = require('../../../config/configDb.js');
const Empresa = db.empresa;
const Veiculo = db.veiculo;
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
        let where = {};

        if (nomeEmpresa) {
            where['nome'] = {[Op.like]: `%${nomeEmpresa}%`};
        }
        return Empresa.findAll({
            where
        })
    }

    addVeiculo(idEmpresa, veiculo) {
        return this.findOneByPk(idEmpresa).then(empresaBanco => {
            empresaBanco.addVeiculo(veiculo.id);
        })
    }

    getVeiculos(idEmpresa) {
        return this.findOneByPk(idEmpresa)
            .then(empresaBanco => {
                return empresaBanco.getVeiculos();
            })
    }

    findByNomeAndVeiculo(nomeEmpresa, veiculoId) {
        return Empresa.findAll({
            where: {
                nome: {
                    [Op.like]: `%${nomeEmpresa}%`
                },
                '$veiculos.id$': veiculoId
            }, include: [
                {
                    model: Veiculo,
                    required: false,
                }
            ]
        })
    }


}

module.exports = EmpresaRepository;
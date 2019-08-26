const db = require('../../../config/configDb');
const Op = db.Sequelize.Op;
const Veiculo = db.veiculo;

class VeiculoRepository {

    save(veiculo) {
        return Veiculo.create(veiculo);
    }

    findOneByPk(id) {
        return Veiculo.findByPk(id);
    }

    update(veiculo) {
        return this.findOneByPk(veiculo.id).then(veiculoBanco => {
            veiculoBanco.update({
                placa: veiculo.placa,
                nome: veiculo.nome
            })
        })
    }

    delete(id) {
        return Veiculo.destroy({ where: { id } });
    }


    findByPlaca(placa){
        return Veiculo.findAll({
            where: {placa : {[Op.like]: '%'+placa+'%'}}
        })
    }

    findAll() {
        return Veiculo.findAll();
    }
}

module.exports = VeiculoRepository;
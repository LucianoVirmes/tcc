const db = require('../../../config/configDb');
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


    findAll() {
        return Veiculo.findAll();
    }
}

module.exports = VeiculoRepository;
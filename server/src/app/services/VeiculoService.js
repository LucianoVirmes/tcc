const VeiculoRepository = require('../repository/VeiculoRepository.js');
const repository = new VeiculoRepository();

class VeiculoService {

    salvar(veiculo) {
        return repository.save(veiculo);
    }

    alterar(veiculo) {
        return repository.update(veiculo);
    }

    deletar(id) {
        return repository.delete(id);
    }

    findAll() {
        return repository.findAll();
    }

    getVeiculo(id){
        return repository.findOneByPk(id);
    }
}

module.exports = VeiculoService;
const Repository = require('../repository/MotoristaRepository.js');
const repository = new Repository();

class MotoristaService {

    salvaOuAltera(motorista) {
        if (motorista.id) {
            return repository.update(motorista);
        } else {
            return repository.save(motorista);
        }
    }

    getAll() {
        return repository.findAllCompleto();
    }

    getById(idMotorista) {
        return repository.findCompletoByPk(idMotorista);
    }

    deleteById(idMotorista) {
        return repository.deleteByPk(idMotorista);
    }
}

module.exports = MotoristaService;
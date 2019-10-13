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

    addEmpresa(motorista){
        return repository.addEmpresa(motorista);
    }

    getEmpresas(idMotorista){
        return repository.findEmpresas(idMotorista);
    }

    getAutocomplete(nomeMotorista) {
        return repository.findByNome(nomeMotorista);
    }

    getAutocompleteByEmpresa(nomeMotorista, idEmpresa){
        return repository.findByNomeAndEmpresa(nomeMotorista, idEmpresa);
    }
}

module.exports = MotoristaService;
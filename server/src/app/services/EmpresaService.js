const EmpresaRepository = require('../repository/EmpresaRepository.js');
const repository = new EmpresaRepository();

class EmpresaService {

    getEmpresas() {
        return repository.findAll();
    }

    salvaOuAltera(empresa) {

        if (empresa.id) {
            return repository.update(empresa);
        } else {
            return repository.save(empresa);
        }
    }

    remover(empresa) {
        return repository.deleteOne(empresa);
    }

    visualizar(empresaId) {
        return repository.findOneByPk(empresaId);
    }

    getEmpresasByNome(nome) {
        return repository.findByNome(nome);
    }

    getVeiculos(idEmpresa) {
        return repository.getVeiculos(idEmpresa);
    }

    addVeiculo(request) {
        return repository.addVeiculo(request.id, request.veiculo);
    }

    removeVeiculo(request) {
        return repository.removeVeiculo(request.idVeiculo, request.idEmpresa);
    }

    getEmpresasByNomeAndVeiculos(nomeEmpresa, idVeiculo) {
        return repository.findByNomeAndVeiculo(nomeEmpresa, idVeiculo);
    }
}

module.exports = EmpresaService;
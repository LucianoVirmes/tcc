
const PesagemRepository = require('../repository/PesagemRepository.js');
const IntegracaoBalancaController = require('../controllers/IntegracaoBalancaController.js');
const repository = new PesagemRepository();
const integracaoBalancaController = new IntegracaoBalancaController();

class PesagemService {
    
    salvar(pesagem){
        return repository.save(pesagem);
    }

    listar(){
        return repository.findAll();
    }

    pesar(){
        return integracaoBalancaController.conectar();
    }
}

module.exports = PesagemService;


const PesagemRepository = require('../repository/PesagemRepository.js');
const repository = new PesagemRepository();

class PesagemService {
    
    salvar(pesagem){
        return repository.save(pesagem);
    }

    listar(){
        return repository.findAll();
    }

}

module.exports = PesagemService;

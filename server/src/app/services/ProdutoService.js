const ProdutoRepository = require('../repository/ProdutoRepository.js');
const repository = new ProdutoRepository();

class ProdutoService {

    listar(){
        return repository.findAll();
    }

    salvar = (produto) => {
        return repository.save(produto);
    }
}

module.exports = ProdutoService;
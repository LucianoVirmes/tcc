const ProdutoRepository = require('../repository/ProdutoRepository.js');
const repository = new ProdutoRepository();

class ProdutoService {

    listar() {
        return repository.findAll();
    }

    salvar = (produto) => {
        return repository.save(produto);
    }

    visualizar = (id) => {
        return repository.findOneByPk(id);
    }

    alterar = (produto) => {
        return repository.update(produto);
    }

    remover = (id) => {
        return repository.delete(id);
    }

}

module.exports = ProdutoService;
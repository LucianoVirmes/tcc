 const db = require('../../../config/configDb');
 const Produto = db.produto;
class ProdutoRepository {

    save(produto){
        return Produto.create(produto);
    }

    findAll(){
      return Produto.findAll();
    }


}

module.exports = ProdutoRepository;
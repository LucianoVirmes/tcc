const db = require('../../../config/configDb');
const Produto = db.produto;
class ProdutoRepository {

  save(produto) {
    return Produto.create(produto);
  }

  findAll() {
    return Produto.findAll();
  }

  findOneByPk(id) {
    return Produto.findByPk(id);
  }

  update(produto) {
    return this.findOneByPk(produto.id).then(produtoBanco => {
      produtoBanco.update({
        nome: produto.nome,
        unidademedida: produto.unidademedida
      })
    })
  }

  delete(id) {
    return Produto.destroy({
      where: { id }
    })
  }
}

module.exports = ProdutoRepository;
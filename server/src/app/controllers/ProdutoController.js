const ProdutoService = require('../services/ProdutoService.js');
const service = new ProdutoService();
class ProdutoController {
    static rotas() {
        return {
            produto: "/produto",
            produtoId: "/produto/:id",
        }
    }

    cadastro() {
        return (req, res) => {
            service.salvar(req.body).then(produto => {
                res.sendStatus(200);
            }, error => {
                console.log(error);
                res.sendStatus(500);
            });
        }
    }

    lista() {
        return (req, res) => {
            service.listar().then(produtos => {
                res.send(produtos);
            }, error => {
                console.log(error);
                res.sendStatus(500);
            })
        }
    }

    visualiza() {
        return (req, res) => {
            service.visualizar(parseInt(req.params.id)).then(produto => {
                res.send(produto);
            }, error => {
                console.log(error);
                res.sendStatus(500);
            })
        }
    }

    alterar() {
        return (req, res) => {
            service.alterar(req.body).then(() => res.sendStatus(200), err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }

    deleta() {
        return (req, res) => {
            service.remover(req.params.id).then(() => res.sendStatus(200), err => {
                console.log(err);
                res.sendStatus(500);
            })
        }
    }
}

module.exports = ProdutoController;
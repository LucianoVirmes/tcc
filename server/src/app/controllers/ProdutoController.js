const ProdutoService = require('../services/ProdutoService.js');
const service = new ProdutoService();
class ProdutoController {
    static rotas(){
        return {
            lista: "/produto/lista",
            cadastro:"/produto/cadastro"
        }
    }

    cadastro(){
        return (req, res) => {
            service.salvar(req.body).then(produto => {
                res.sendStatus(200);
            }, error => {
                console.log(error);
                res.sendStatus(500);
            });
        }
    }

    lista(){
    return (req, res)=>  {
        service.listar().then(produtos => {
            res.send(produtos);
        }, error => {
            console.log(error);
            res.sendStatus(500);
            })
        }
    }
}

module.exports = ProdutoController;
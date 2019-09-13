
const PesagemRepository = require('../repository/PesagemRepository.js');
const IntegracaoBalancaController = require('../controllers/IntegracaoBalancaController.js');
const repository = new PesagemRepository();
const integracaoBalancaController = new IntegracaoBalancaController();
const RelatorioService = require('../services/RelatorioService.js');
const relatorioService = new RelatorioService();

class PesagemService {

    salvar(pesagem) {

        let novaPesagem = {
            codempresa: pesagem.empresa.id,
            datahora: pesagem.data,
            codmotorista: pesagem.motorista.id,
            codveiculo: pesagem.veiculo.id,
            pesobruto: pesagem.peso,
            pesotara: pesagem.veiculo.tara,
            pesoliquido: pesagem.peso - pesagem.veiculo.tara
        }

        return repository.save(novaPesagem);
    }

    listar() {
        return repository.findAll();
    }

    pesar() {
        return integracaoBalancaController.conectar();
    }

    verificarConexao(porta) {
        return integracaoBalancaController.verificarConexao(porta);
    }

    geraRelatorio() {
        return repository.findAll().then(pesagens => {
            return relatorioService.getRelatorio('relatorioPesagem.handlebars', pesagens);
        })

    }
}

module.exports = PesagemService;

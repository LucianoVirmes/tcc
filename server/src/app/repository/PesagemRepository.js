const db = require('../../../config/configDb');
const Pesagem = db.pesagem;
const op = db.Sequelize.Op;
const Motorista = db.motorista;
const Empresa = db.empresa;
const Veiculo = db.veiculo;

class PesagemRepository {


    save(pesagem) {
        return Pesagem.create(pesagem);
    }

    findAll() {
        return Pesagem.findAll({
            include:
                [
                    { model: Motorista, as: 'motorista' },
                    { model: Empresa, as: 'empresa' },
                    { model: Veiculo, as: 'veiculo' }
                ]
        });

    }

    findAllRelatorioFiltros(pesquisa) {

        let where = {};

        if (pesquisa.motorista) {
            where['$motorista.id$'] = pesquisa.motorista.id;
        }

        if (pesquisa.empresa) {
            where['$empresa.id$'] = pesquisa.empresa.id;
        }
        if (pesquisa.dataInicial && pesquisa.dataFinal) {
            where['datahora'] = { [op.between]: [pesquisa.dataInicial, pesquisa.dataFinal] }
        }

        return Pesagem.findAll({
            include:
                [
                    { model: Motorista, as: 'motorista' },
                    { model: Empresa, as: 'empresa' },
                    { model: Veiculo, as: 'veiculo' }
                ], where
        })
    }

}
module.exports = PesagemRepository;
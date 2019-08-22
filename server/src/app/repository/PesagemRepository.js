const db = require('../../../config/configDb');
const Pesagem = db.pesagem;
const Motorista = db.motorista;
const Empresa = db.empresa;
const Veiculo = db.veiculo;

class PesagemRepository {


    save(pesagem) {
        return Pesagem.create(pesagem);
    }

    findAll() {
        return Pesagem.findAll()({
            include:
                [
                    { model: Motorista, as: 'motorista' },
                    { model: Empresa, as: 'empresa' },
                    { model: Veiculo, as: 'veiculo' }
                ]
        });

    }
}
module.exports = PesagemRepository;
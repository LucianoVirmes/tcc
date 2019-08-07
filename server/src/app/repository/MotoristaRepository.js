const db = require('../../../config/configDb');
const Motorista = db.motorista;
const Pessoa = db.pessoa;
const Empresa = db.empresa;

class MotoristaRepository {

    save(motorista){
       return Pessoa.create(motorista.pessoa).then(pessoa =>{
            motorista.codpessoa = pessoa.id;
            Motorista.create(motorista).then(motoristaBanco => {
                motoristaBanco.setEmpresas([motorista.empresa.id]);
            });
       })
    }

    update(motorista){
        return this.findCompletoByPk(motorista.id).then(motoristaBanco => {
                motoristaBanco.update({
                    cnh: motorista.cnh
                }).then(() => {
                    Pessoa.update({
                        nome: motorista.nome
                    }, {
                        where: {id: motoristaBanco.codpessoa}
                    })
                })

            })
    }

    findCompletoByPk(idMotorista){
        return Motorista.findByPk(idMotorista, {
            include: [{
                model: Pessoa,
                as: 'pessoa'
            }]
        });
    }
    findAllCompleto(){
        return Motorista.findAll({
            include: [{
                model: Pessoa,
                as: 'pessoa'
            }, {
                model: Empresa,
                as: 'empresas'
            }]
        });
    }

    deleteByPk(idMotorista){
        return Motorista.destroy({
            where: {id: idMotorista}
        })
    }
}

module.exports = MotoristaRepository;
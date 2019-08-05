const db = require('../../../config/configDb');
const Motorista = db.motorista;

class MotoristaRepository {

    save(motorista){
       return Motorista.create(motorista);
    }

    update(motorista){
        return this.findByPk(motorista.id).then(motoristaBanco => {
                motoristaBanco.update({
                    nome: motorista.nome,
                    cnh: motorista.cnh,
                }, {    
                    where: {id: motoristaBanco.id}
                })
            })
    }
    findByPk(idMotorista){
        return Motorista.findByPk(idMotorista);
    }
    findAll(){
        return Motorista.findAll();
    }

    deleteByPk(idMotorista){
        return Motorista.destroy({
            where: {id: idMotorista}
        })
    }
}

module.exports = MotoristaRepository;
const db = require('../../../config/configDb');
const Motorista = db.motorista;

class MotoristaRepository {

    save(motorista){
       return Motorista.create(motorista);
    }
    update(motorista){
        this.findByPk(motorista.id).then(motoristaBanco => {
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
}

module.exports = MotoristaRepository;
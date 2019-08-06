const EmpresaRepository = require('../repository/EmpresaRepository.js');
const repository = new EmpresaRepository();

class EmpresaService {

    getEmpresas(){
       return repository.findAll();
    }

    salvaOuAltera(empresa){
         if(empresa.id){
             return repository.update(empresa);
         } else {
             return repository.save(empresa);
         }  
    }

    remover(empresa) {
        return repository.deleteOne(empresa);
    }

}

module.exports = EmpresaService;
export default class {
    constructor(resource){
        this._resource = resource("motorista{/id}");
    }

    cadastra(motorista){
       return this._resource.save(motorista);
    }

    lista(){
        return this._resource.query()
        .then(res => res.json());
    }

    remover(id){
        return this._resource.delete({id});
    }

}
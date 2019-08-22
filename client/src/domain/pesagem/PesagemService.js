export default class {

    constructor(resource) {
        this._resource = resource('/pesagem');
    }


    salvar(pesagem) {
        return this._resource.save(pesagem);
    }

    listar() {
        return this._resource.query().then(res => res.json());
    }

}
export default class {

    constructor(resource) {
        this._resource = resource('veiculo{/id}');
    }

    cadastrar(veiculo) {
        return this._resource.save(veiculo);
    }

    listar() {
        return this._resource.query().
            then(res => res.json());
    }

    visualizar(id) {
        return this._resource.query({ id }).then(res => res.json());
    }

    inativar(id) {
        return this._resource.delete({ id });
    }


}
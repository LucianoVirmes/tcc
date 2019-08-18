export default class {
    
    constructor(resource) {
        this._resource = resource('empresa{/id}')
    }

    cadastrar(empresa) {
        return this._resource.save(empresa);
    }

    listar() {
        return this._resource.query().then(res => res.json());
    }

    alterar(empresa) {
        return this._resource.update(empresa);
    }

    visualizar(id) {
        return this._resource.query({ id }).then(res => res.json());
    }

    deletar(id) {
        return this._resource.delete({ id });
    }
}
export default class {
    constructor(resource) {
        this._resource = resource('produto{/id}')
    }

    listar() {
        let resource = this._resource('produto/lista');
        return resource.query().
            then(res => res.json());
    }

    cadastrar(produto) {
        return this._resource.save(produto);
    }

    visualizar(id) {
        return this._resource.query({ id }).then(res => res.json());
    }

    remover(id) {
        return this._resource.delete({ id });
    }
}
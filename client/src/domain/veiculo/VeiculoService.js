export default class {

    constructor(resource) {
        const acoesPersonalizadas= { getVeiculosByPlaca: {method: 'GET', url: 'placa'}}
        this._resource = resource('veiculo{/id}', {}, acoesPersonalizadas);
    }

    cadastrar(veiculo) {
        return this._resource.save(veiculo);
    }

    listar() {
        return this._resource.query().
            then(res => res.json());
    }

    alterar(veiculo){
        return this._resource.update(veiculo);
    }

    visualizar(id) {
        return this._resource.query({ id }).then(res => res.json());
    }

    remover(id) {
        return this._resource.delete({ id });
    }

    getVeiculosByPlaca(placa){
        return this._resource.getVeiculosByPlaca(placa).then( res => res.json());
    }
}
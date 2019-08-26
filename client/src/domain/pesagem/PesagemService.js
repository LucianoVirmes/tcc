export default class {

    constructor(resource) {
        const acoesPersonalizadas = { pesar: { method: 'GET', url: 'pesar' }, }
        this._resource = resource('/pesagem', {}, acoesPersonalizadas);
    }


    salvar(pesagem) {
        return this._resource.save(pesagem);
    }

    listar() {
        return this._resource.query().then(res => res.json());
    }

    pesar() {
        return this._resource.pesar().then(res => res.json());
    }

}
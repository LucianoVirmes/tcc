export default class {

    constructor(resource) {
        const acoesPersonalizadas = {
            pesar: { method: 'GET', url: 'pesar' },
            verificarConexao: { method: 'GET', url: 'conexao' },
            imprimir: { method: 'GET', url: 'relatorio'}
        }
        this._resource = resource('pesagem{/id}', {}, acoesPersonalizadas);
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

    verificarConexao() {
        return this._resource.verificarConexao().then(res => res.json());
    }

    imprimir(){
        return this._resource.imprimir();
    }
}
export default class {

    constructor(resource) {
        const acoesPersonalizadas = {
            pesar: { method: 'GET', url: 'pesar' },
            verificarConexao: { method: 'GET', url: 'conexao' },
            imprimir: { method: 'GET', url: 'relatorio', responseType: 'arraybuffer' }
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

    imprimir() {
        return this._resource.imprimir().then(response => {
            console.log(response);
            let blob = new Blob([response.data], { type: 'application/pdf' })
            let link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = 'test.pdf'
            link.click()
        })
               
    }
}
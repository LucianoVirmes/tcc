export default class {
    
    constructor(resource) {
        const acoesPersonalizadas = {
            getEmpresaVeiculo: { method: "GET", url: "empresa/veiculo/lista" },
            addEmpresaVeiculo: { method: "POST", url: "empresa/veiculo/novo"}
        }
        this._resource = resource('empresa{/id}', {}, acoesPersonalizadas);
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

    getVeiculos(idEmpresa) {
        return this._resource.getEmpresaVeiculo({ id: idEmpresa }).then(res => res.json());
    }

    addVeiculo(addEmpresaVeiculo) {
        return this._resource.addEmpresaVeiculo(addEmpresaVeiculo)
    }
}
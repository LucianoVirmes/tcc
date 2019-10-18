export default class {

    constructor(resource) {
        const acoesPersonalizadas = {
            getEmpresaVeiculo: { method: "GET", url: "empresa-veiculo/" },
            addEmpresaVeiculo: { method: "POST", url: "empresa-veiculo/" },
            removeEmpresaVeiculo: { method: "POST", url: "empresa/remover/veiculo" },
            getEmpresaAutocomplete: { method: "GET", url: "empresa-autocomplete/empresa" },
            getEmpresaAutocompleteByVeiculo: { method: "GET", url: "empresa-autocomplete/veiculo" }
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
        return this._resource.addEmpresaVeiculo(addEmpresaVeiculo);
    }

    removerVeiculo(veiculoId, empresaId) {
        return this._resource.removeEmpresaVeiculo({ idVeiculo: veiculoId, idEmpresa: empresaId }).then(res => res.json());
    }

    getEmpresaAutocomplete(nomeEmpresa) {
        return this._resource.getEmpresaAutocomplete(nomeEmpresa).then(res => res.json());
    }

    getEmpresaAutocompleteByVeiculo(nomeEmpresa, idVeiculo) {
        return this._resource.getEmpresaAutocompleteByVeiculo(nomeEmpresa, idVeiculo).then(res => res.json());
    }
}
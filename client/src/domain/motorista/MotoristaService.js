export default class {
    constructor(resource) {
        const acoesPersonalizadas = {
            getEmpresaMotorista: { method: "GET", url: "motorista/empresa/lista" },
            addEmpresaMotorista: { method: "POST", url: "motorista/empresa" },
            getAutocomplete: { method: "GET", url: "motorista-autocomplete/motorista" },
            getAutocompleteByEmpresa: { method: "GET", url: "motorista-autocomplete/empresa" }
        }
        this._resource = resource("motorista{/id}", {}, acoesPersonalizadas);
    }

    cadastrar(motorista) {
        return this._resource.save(motorista);
    }

    listar() {
        return this._resource.query()
            .then(res => res.json());
    }

    visualizar(id) {
        return this._resource.query({ id }).then(res => res.json());
    }

    alterar(motorista) {
        return this._resource.update(motorista);
    }

    remover(id) {
        return this._resource.delete({ id });
    }

    getEmpresas(idMotorista) {
        return this._resource.getEmpresaMotorista({ id: idMotorista }).then(res => res.json());
    }

    addEmpresa(motoristaEmpresa) {
        return this._resource.addEmpresaMotorista(motoristaEmpresa)
    }

    getAutocomplete(nomeMotorista) {
        return this._resource.getAutocomplete(nomeMotorista).then(res => res.json());
    }

    getAutocompleteByEmpresa(nomeMotorista, idEmpresa) {
        return this._resource.getAutocompleteByEmpresa(nomeMotorista, idEmpresa);
    }
}
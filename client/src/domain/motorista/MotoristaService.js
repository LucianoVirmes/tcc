export default class {
    constructor(resource) {
        const acoesPersonalizadas = {
            getEmpresaMotorista: { method: "GET", url: "motorista/empresa/lista" },
            addEmpresaMotorista: { method: "POST", url: "motorista/empresa"}
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
}
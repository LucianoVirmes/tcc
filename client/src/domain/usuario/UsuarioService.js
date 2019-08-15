export default class {

    constructor(resource) {
        const acoesPersonalizadas = {
            getPermissoes: { method: 'GET', url: 'usuario/listaPermissoes' },
            getUsuarios: { method: 'GET', url: 'usuario/lista' }
        }
        this._resource = resource('usuario{/id}', {}, acoesPersonalizadas);
    }

    cadastrar(usuario) {
        return this._resource.save(usuario);
    }

    listar() {
        return this._resource.getUsuarios().
            then(res => res.json());
    }

    getPermissoes() {
        return this._resource.getPermissoes().
            then(res => res.json());
    }

    visualizar(id) {
        return this._resource.query({ id }).then(res => res.json());
    }

    inativar(id) {
        return this._resource.delete({ id });
    }


}
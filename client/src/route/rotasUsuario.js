import Lista from '../views/usuario/Lista.vue';
import Cadastro from '../views/usuario/Cadastro.vue';
import Usuario from '../views/usuario/Index.vue';

const meta = {desc: 'Usuários'}
const cadastro = { path: '/usuario/cadastro', component: Cadastro, titulo: 'Cadastro', menu: true, meta };
const lista = { path: '/usuario/lista', component: Lista, titulo: 'Lista', menu: true, meta }
const editar = { path: '/usuario/cadastro/:id', component: Cadastro, titulo: 'Editar', meta}

export const rotasUsuario = {
    path: '/usuario/lista', component: Usuario, titulo: 'Usuários', meta, children: [lista, cadastro, editar]
};
export const rotasUsuarioTela = { 'cadastro': cadastro, 'editar': editar, 'lista': lista };

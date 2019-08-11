import Cadastro from '../views/empresa/Cadastro.vue';
import Lista from '../views/empresa/Lista.vue';
import Empresa from '../views/empresa/Index.vue';

const meta = { desc: 'Empresa' }
const cadastro = { path: '/empresa/cadastro', titulo: 'Cadastro', component: Cadastro };
const lista = { path: '/empresa/lista', titulo: 'Lista', component: Lista, meta };
const alteracao = { path: '/empresa/cadastro/:id', titulo: 'Alterar', component: Cadastro, menu: false, meta }

export const rotasEmpresa = {
    path: '/empresa/lista', component: Empresa, titulo: 'Empresas', meta,
    children: [lista, cadastro, alteracao]
};

export const rotasEmpresaTela = { 'cadastro': cadastro, 'lista': lista, 'alterar': alteracao };
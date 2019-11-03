import Cadastro from '../views/produto/Cadastro.vue';
import Lista from '../views/produto/Lista.vue';
import Produto from '../views/produto/Index.vue';

const meta = { desc: "Produtos", requireAuth: true }
const lista = { path: '/produto/lista', titulo: 'Lista', component: Lista, meta };
const cadastro = { path: '/produto/cadastro', titulo: 'Cadastro', component: Cadastro, meta }
const edita = { path: '/produto/cadastro/:id', titulo: 'Editar', component: Cadastro, meta }


export const rotasProduto =
{
    path: '/produto/lista', component: Produto, titulo: 'Produtos', parent:'/produto', icon:'box-open',meta, children: [lista, cadastro, edita]
}

export const rotasTela = { 'lista': lista, 'cadastro': cadastro };
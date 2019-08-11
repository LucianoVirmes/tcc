import Cadastro from '../views/produto/Cadastro.vue';
import Lista from '../views/produto/Lista.vue';
import Produto from '../views/produto/Index.vue';

const lista = { path: '/produto/lista', titulo: 'Lista', component: Lista, meta };
const cadastro = { path: '/produto/cadastro', titulo: 'Cadastro', component: Cadastro, meta }
const meta = { desc: "Produtos" }
export const rotasProduto =
{
    path: '/produto/lista', component: Produto, titulo: 'Produtos', meta, children: [lista, cadastro]
}

export const rotasTela = { 'lista': lista, 'cadastro': cadastro };
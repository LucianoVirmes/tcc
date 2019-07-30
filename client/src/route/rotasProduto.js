import Cadastro from '../views/produto/Cadastro.vue';
import Lista from '../views/produto/Lista.vue';

export const rotasProduto = [
    {path: '/produto/cadastro', titulo:'Cadastro', component: Cadastro},
    {path: '/produto/lista', titulo:'Lista', component: Lista}
]
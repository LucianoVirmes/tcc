import Lista from '../views/usuario/Lista.vue';
import Cadastro from '../views/usuario/Cadastro.vue';
import Home from '../views/home/Home.vue';
import Pesagem from '../views/pesagem/Index.vue';

export const routes = [
    { path: '/usuario/lista', component: Lista, titulo: 'Lista'},
    { path: '/usuario/cadastro', component: Cadastro, titulo: 'Cadastro'},
    { path: '/home', component: Home, titulo: 'Home'},
    { path: '/pesagem/index', component: Pesagem, titulo: 'Pesagem'}
];
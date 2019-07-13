import Lista from './components/usuario/Lista.vue';
import Cadastro from './components/usuario/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '/usuario/lista', component: Lista, titulo: 'Lista'},
    { path: '/usuario/cadastro', component: Cadastro, titulo: 'Cadastro'},
    { path: '/home', component: Home, titulo: 'Home'}
];
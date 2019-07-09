import Cadastro from './components/usuario/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '/usuario', component: Cadastro, titulo: 'Cadastro'},
    { path: '/home', component: Home, titulo: 'Home'}
];
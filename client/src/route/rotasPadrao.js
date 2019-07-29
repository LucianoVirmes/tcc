import Home from '../views/home/Home.vue';
import Pesagem from '../views/pesagem/Index.vue';

export const rotasPadrao = [
    { path: '/home', component: Home, titulo: 'Home'},
    { path: '/pesagem/index', component: Pesagem, titulo: 'Pesagem'}
];
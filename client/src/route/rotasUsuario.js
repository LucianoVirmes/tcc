import Lista from '../views/usuario/Lista.vue';
import Cadastro from '../views/usuario/Cadastro.vue';

export const rotasUsuario = [
    { path: '/usuario/lista', component: Lista, titulo: 'Lista'},
    { path: '/usuario/cadastro', component: Cadastro, titulo: 'Cadastro'}
];
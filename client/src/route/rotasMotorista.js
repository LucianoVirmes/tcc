import Cadastro from '../views/motorista/Cadastro.vue';
import Lista from '../views/motorista/Lista.vue';

export const rotasMotorista = [
    {path: '/motorista/cadastro', titulo:'Cadastro', component: Cadastro },
    {path: '/motorista/lista', titulo: 'Lista', component: Lista},
    {path: '/motorista/alterar/:id', titulo:'Alterar', component: Cadastro, menu: false }
]
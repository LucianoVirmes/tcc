import Cadastro from '../views/empresa/Cadastro.vue';
import Lista from '../views/empresa/Lista.vue';

export const rotasEmpresa = [
    {path: '/empresa/cadastro', titulo:'Cadastro', component: Cadastro },
    {path: '/empresa/lista', titulo: 'Lista', component: Lista},
    {path: '/empresa/alterar/:id', titulo:'Alterar', component: Cadastro, menu: false }
]
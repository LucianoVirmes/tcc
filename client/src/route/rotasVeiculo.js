import Cadastro from '../views/veiculo/Cadastro.vue';
import Lista from '../views/veiculo/Lista.vue';
import Veiculo from '../views/veiculo/Index.vue';

const meta = { desc: "Veículo" }
const lista = { path: '/veiculo/lista', titulo: 'Lista', component: Lista, meta };
const cadastro = { path: '/veiculo/cadastro', titulo: 'Cadastro', component: Cadastro, meta }
const edita = { path: '/veiculo/cadastro/:id', titulo: 'Editar', component: Cadastro, meta }


export const rotasVeiculo =
{
    path: '/veiculo/lista', component: Veiculo, titulo: 'Veículos', meta, children: [lista, cadastro, edita]
}

export const rotasTela = { 'lista': lista, 'cadastro': cadastro };
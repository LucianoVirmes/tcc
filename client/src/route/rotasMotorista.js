import Cadastro from '../views/motorista/Cadastro.vue';
import Lista from '../views/motorista/Lista.vue';
import Motorista from '../views/motorista/Index.vue';
import MotoristaEmpresa from '../views/motorista/MotoristaEmpresa.vue';

const meta = { desc: "Motorista" }
const cadastro = {
    path: '/motorista/cadastro', titulo: 'Cadastro', component: Cadastro, meta
};
const lista = {
    path: '/motorista/lista', titulo: 'Lista', component: Lista, meta
}
const alterar = {
    path: '/motorista/cadastro/:id', titulo: 'Alterar', component: Cadastro, menu: false, meta
}

const motoristaEmpresa = {
    path: '/motorista/motorista-empresa', titulo: 'Motorista empresa', component: MotoristaEmpresa, meta
}

export const rotasMotorista = {
    path: '/motorista/lista', component: Motorista, titulo: 'Motoristas', meta, children: [lista, cadastro, alterar, motoristaEmpresa]
};

export const rotasMotoristaTela = { 'cadastro': cadastro, 'alterar': alterar, 'lista': lista, 'motoristaEmpresa': motoristaEmpresa }
import Cadastro from '../views/empresa/Cadastro.vue';
import Lista from '../views/empresa/Lista.vue';
import Empresa from '../views/empresa/Index.vue';
import EmpresaVeiculo from '../views/empresa/EmpresaVeiculo.vue';

const meta = { desc: 'Empresa' }
const cadastro = { path: '/empresa/cadastro', titulo: 'Cadastro', component: Cadastro, meta };
const lista = { path: '/empresa/lista', titulo: 'Lista', component: Lista, meta };
const alteracao = { path: '/empresa/cadastro/:id', titulo: 'Alterar', component: Cadastro, menu: false, meta }
const empresaVeiculos = {
    path: '/empresa/empresa-veiculo', titulo: 'Veículos da empresa', component: EmpresaVeiculo, meta
}

export const rotasEmpresa = {
    path: '/empresa/lista', component: Empresa, icon: 'briefcase', parent: '/empresa', titulo: 'Empresas', meta,
    children: [lista, cadastro, alteracao, empresaVeiculos]
};

export const rotasEmpresaTela = { 'cadastro': cadastro, 'lista': lista, 'alterar': alteracao, 'empresaVeiculos': empresaVeiculos };
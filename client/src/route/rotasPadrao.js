import Home from '../views/home/Home.vue';
import Pesagem from '../views/pesagem/Index.vue';
import Cadastro from '../views/login/Cadastro.vue';
import Login from '../views/login/Login.vue';
import { rotasProduto } from './rotasProduto.js';
import { rotasUsuario } from './rotasUsuario.js';
import { rotasMotorista } from './rotasMotorista';
import { rotasEmpresa } from './rotasEmpresa';
import { rotasVeiculo } from './rotasVeiculo';

export const rotasPadrao = [
    {
        path: '/pesagem/index', name: "home", component: Pesagem, parent: '/pesagem', titulo: 'Pesagem', icon: 'balance-scale',
        meta: {
            desc: "Pesagem", requireAuth: true
        }
    },
    { path: '/home', redirect: '/pesagem/index', menu: false },
    { path: '*', redirect: '/login', menu: false },
    { path: '/', redirect: '/login', menu: false },
    {
        path: '/cadastre-se', titulo: 'Novo usuário', component: Cadastro, menu: false, requireAuth: false,
    },
    {
        path: '/login', titulo: 'Login', name: 'login', component: Login, menu: false, requireAuth: false
    },
    rotasProduto,
    rotasEmpresa,
    rotasMotorista,
    rotasUsuario,
    rotasVeiculo
];
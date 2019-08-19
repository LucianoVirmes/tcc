import Home from '../views/home/Home.vue';
import Pesagem from '../views/pesagem/Index.vue';
import { rotasProduto } from './rotasProduto.js';
import { rotasUsuario } from './rotasUsuario.js';
import { rotasMotorista } from './rotasMotorista';
import { rotasEmpresa } from './rotasEmpresa';
import { rotasVeiculo } from './rotasVeiculo';

export const rotasPadrao = [
    { path: '/home', component: Home, titulo: 'Home', menu: false },
    {
        path: '/pesagem/index', component: Pesagem, titulo: 'Pesagem', meta: {
            desc: "Pesagem"
        }
    },
    rotasProduto,
    rotasEmpresa,
    rotasMotorista,
    rotasUsuario,
    rotasVeiculo
];
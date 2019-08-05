import { rotasUsuario } from './rotasUsuario.js';
import { rotasPadrao } from './rotasPadrao';
import { rotasProduto } from './rotasProduto.js';
import { rotasMotorista } from './rotasMotorista.js';

const routes = [];

rotasUsuario.forEach(rota => {
    routes.push(rota);
});

rotasPadrao.forEach(rota => {
    routes.push(rota);
});

rotasProduto.forEach(rota => {
    routes.push(rota);
})

rotasMotorista.forEach(rota => {
    routes.push(rota);
})

export {routes};
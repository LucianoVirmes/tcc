import { rotasUsuario } from './rotasUsuario.js';
import { rotasPadrao } from './rotasPadrao';

const routes = [];

rotasUsuario.forEach(rota => {
    routes.push(rota);
});

rotasPadrao.forEach(rota => {
    routes.push(rota);
})

export {routes};
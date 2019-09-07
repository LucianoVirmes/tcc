import { rotasUsuario } from './rotasUsuario.js';
import { rotasPadrao } from './rotasPadrao';
import { rotasProduto } from './rotasProduto.js';
import { rotasMotorista } from './rotasMotorista.js';
import { rotasEmpresa } from './rotasEmpresa.js';
import {  rotasVeiculo} from './rotasVeiculo.js';
import { login } from './rotasLogin.js';

const routes = [];

routes.push(rotasUsuario);

routes.push(rotasEmpresa);

routes.push(login);

rotasPadrao.forEach(rota => {
    routes.push(rota);
});
routes.push(rotasProduto);

routes.push(rotasMotorista);

export { routes };
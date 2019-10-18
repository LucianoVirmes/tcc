
let balancaConexao;

if (process.env.IS_ELECTRON) {
  balancaConexao = require('./BalancaConexao.js').default;
} else {
  balancaConexao = class BalancaConexao {
    async conectar() {
    }

    listarPortas() {
    }
    async verificarConexao() {
    }
  }
}
export default balancaConexao;
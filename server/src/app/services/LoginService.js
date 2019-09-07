const jwt = require('jsonwebtoken');

class LoginService {
    
    geraJwt(usuario) {
        const today = new Date();
        const expirationDate = new Date(today);
        expirationDate.setDate(today.getDate() + 60);
      
        return jwt.sign({
          email: usuario.login,
          id: this.id,
          exp: parseInt(expirationDate.getTime() / 1000, 10),
        }, 'secret');
      }

      toAuthJSON(usuario) {
        return {
          id: usuario.id,
          login: usuario.login,
          token: this.generateJWT(),
        };
      };

}

module.exports = LoginService;



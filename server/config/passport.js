const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const UsuarioRepository = require('../src/app/repository/UsuarioRepository.js');
const UsuarioService = require('../src/app//services/UsuarioService.js');

const usuarioRepository = new UsuarioRepository(); 
const usuarioService = new UsuarioService();


passport.use(new LocalStrategy({
    login: 'usuario[login]',
    senha: 'usuario[senha]',
  }, (login, senha, done) => {
    usuarioRepository.findByLogin(login)
      .then((usuario) => {
        if(!usuario || !usuarioService.validaSenha(usuario, password)) {
          return done(null, false, { errors: { 'login ou senha password': 'inválidos' } });
        }
        return done(null, usuario);
      }).catch(done);
  }));
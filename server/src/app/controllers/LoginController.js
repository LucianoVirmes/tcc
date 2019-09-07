const passport = require('passport');
const auth = require('../rotas/auth.js');
const LoginService = require('../services/LoginService.js');
const service = new LoginService();

class LoginController {

    static rotas() {
        return {
            login: "/login",
        }
    }


    login() {
        return (req, res, next) => {

            return passport.authenticate('local', { session: false }, (err, passportUser, info) => {

                if (err) {
                    return next(err);
                }

                if (passportUser) {
                    const user = passportUser;
                    user.token = service.geraJwt(passportUser);

                    return res.json({ user: service.toAuthJSON(user) });
                }

                return status(400).info;
            })(req, res, next);
        }
    }
}

module.exports = LoginController;
    const app = require('./config/express');
    const db = require('./config/configDb');
    const rotas = require('./src/app/rotas/rotas');
    require('./config/passport.js');
    //define rotas
    rotas(app);
    db.sequelize
    .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
       
    app.listen(process.env.PORT || 3000);
    module.exports = db;
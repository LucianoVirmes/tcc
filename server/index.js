    const app = require('./config/express');
    const Sequelize =  require('sequelize');
    const rotas = require('./src/app/rotas/rotas');
    const { configure } = require('sequelize-pg-utilities');
    const config = require('./config/dataBase.json')
    const { name, user, password, options } = configure(config)
    const db = new Sequelize(name, user, password, options);
    //define rotas
    rotas(app);
    db
    .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
       
    app.listen(process.env.PORT || 3000);
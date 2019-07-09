    const app = require('./config/express');
    const db =  require('./config/dataBase');
    const rotas = require('./src/app/rotas/rotas');
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
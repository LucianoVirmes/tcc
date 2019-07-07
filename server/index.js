    const app = require('./src/config/express');
    const db =  require('./src/config/dataBase');
    const rotas = require('./src/app/rotas/rota1');
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
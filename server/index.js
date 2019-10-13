    const app = require('./config/express');
    const db = require('./config/configDb');
    const rotas = require('./src/app/rotas/rotas');

    //define rotas
    rotas(app);
    db.sequelize
    .authenticate()
        .then(() => {
            console.log('Conexão estabelecida com sucesso');
        })
        .catch(err => {
            console.error('Não foi possível se conectar ao servidor do banco, erro:', err);
        });
       
    app.listen(process.env.PORT || 3000);
    
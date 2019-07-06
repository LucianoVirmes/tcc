    const app = require('./src/config/express');

    const rotas = require('./src/app/rotas/rota1');
    //define rotas
    rotas(app);
    app.listen(process.env.PORT || 3000);
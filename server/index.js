    const express = require("express");
    const bodyParser = require("body-parser");

    const app = express();
    app.use(bodyParser.urlencoded({extended: true}));

    const rotas = require('./src/app/rotas/rota1');
    //define rotas
    rotas(app);
    app.listen(process.env.PORT || 3000);
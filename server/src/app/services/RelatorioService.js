const fs = require('fs');
const exphbs = require('express-handlebars').create({ layoutsDir: null, defaultLayout: null, partialsDir: 'src/app/views' });
const pdf = require('html-pdf');
var op = { format: 'Letter' };
 
class RelatorioService {

    async getRelatorio(htmlFile, options) {

        const html = await exphbs.render('src/app/views/' + htmlFile);
        pdf.create(html, op);
    }


}

module.exports = RelatorioService;
const fs = require('fs');
const exphbs = require('express-handlebars').create({ layoutsDir: null, defaultLayout: null, partialsDir: 'src/app/views' });
const wkhtmltopdf = require('wkhtmltopdf');

class RelatorioService {
    
    async getRelatorio(htmlFile, options) {
        const html = await exphbs.render('src/app/views/' + htmlFile, { options });

    return  wkhtmltopdf(html, { pageSize: 'letter' });

    }
}

module.exports = RelatorioService;
const fs = require('fs');
const moment = require('moment');

const exphbs = require('express-handlebars').create({
    layoutsDir: null, defaultLayout: null, partialsDir: 'src/app/views',
    helpers: {
        formatDate: function (data, format) {
            if(data){
                return moment(new Date(data)).format(format);
            }
            return '';
        }
        
    }
});
const wkhtmltopdf = require('wkhtmltopdf');

class RelatorioService {

    async getRelatorio(htmlFile, options) {
        const html = await exphbs.render('src/app/views/' + htmlFile, { options });

        return wkhtmltopdf(html, { pageSize: 'letter' });

    }
}

module.exports = RelatorioService;
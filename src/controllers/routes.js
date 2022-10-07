var formidable_improved = require('./utils/formidable_improved.js')
var logger = require('./utils/logger.js')


module.exports = function (express, app) {
    app.set('view engine', 'ejs');

    app.get('/', function (req, res) {
        logger.compliantUser(req)
        res.render('index')
    })

    app.post('/upload', function (req, res) {
        formidable_improved.upload(req, '/../../model/uploads/', res.render('pages/uploaded'))
    })


    // public dir
    app.use('/public', express.static('./views/public'));
}
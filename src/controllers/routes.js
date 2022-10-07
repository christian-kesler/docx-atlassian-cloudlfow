var formidable_improved = require('./utils/formidable_improved.js')


module.exports = function (express, app) {
    app.set('view engine', 'ejs');

    app.get('/', function (req, res) {
        res.render('index')
    })

    app.post('/upload', function (req, res) {
        formidable_improved.upload(req, '/../../model/uploads/', res.render('pages/uploaded'))
    })



    // public dir
    app.use('/public', express.static('./views/public'));
}
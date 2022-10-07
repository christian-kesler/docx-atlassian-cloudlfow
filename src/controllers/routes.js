module.exports = function (express, app) {
    app.set('view engine', 'ejs');

    app.get('/', function (req, res) {
        res.render('index')
    })




    // public dir
    app.use('/public', express.static('./views/public'));
}
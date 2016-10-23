var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');


var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'Main'}));
app.set('view engine', 'handlebars');

app.use(express.static( 'public'));
app.use('/acc', express.static(__dirname + '/acc.json'));

app.get('/', function (req, res) {
    res.render('Index');
});

app.get('/dash', function (req, res) {
    res.render('Dashboard');
});




app.listen(8080);
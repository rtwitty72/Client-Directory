const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('./data.js');


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use('/', express.static('public'));


app.get('/users', function(req, res) {
  res.render('index', data);
});

app.listen(3000, function() {
  console.log('Succefully started express application!');
});

const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const path = require('path');
const userController = require('./controllers/user');
const newList = [];

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use('/', express.static('public'));


app.get('/', function(req, res){
  res.render('index', data);
});


app.get('/users/:id', function(req, res){
  var users;
  for(var i = 0; i<users.length; i++){
    if (users[i].id == req.params.id){
      users = users[i];
    }
  }
  function findOne(item) {
    return item.id === Number(req.params.id)
  }
  res.render('users', data);
});



app.listen(3000, function() {
  console.log('Succefully started express application!');
});

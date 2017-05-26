//requires area
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//globals
var randomNumber = 0;

app.listen(2345, function(){
    console.log('server is up on 2345');
});// end listen

app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('view/index.html'));
});// end get

app.post('/maxNumber', function(req, res) {
  console.log(req.body);
  var maxNumber = req.body.max;
  randomNumber = Math.floor(Math.random() * maxNumber);
  console.log(randomNumber);
});// end post

app.post('/playerGuesses', function(req, res) {
  console.log(req.body);
  var playerGuesses = req.body;
  //res.send(playerGuesses.player1 - randomNumber);
});// end post

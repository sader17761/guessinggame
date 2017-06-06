//requires area
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//globals
var randomNumber = 0;
var port =  process.env.PORT || 2345;

app.listen(port, function(){
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
  var evaluationToReturn = {
    player1: numberEvaluation(playerGuesses.player1),
    player2: numberEvaluation(playerGuesses.player2),
    player3: numberEvaluation(playerGuesses.player3),
    player4: numberEvaluation(playerGuesses.player4),
    player5: numberEvaluation(playerGuesses.player5),
    player6: numberEvaluation(playerGuesses.player6)
  };
console.log(evaluationToReturn);
res.send(evaluationToReturn);
});// end post

function numberEvaluation( guess ){
  var evaluate = '';
    if (guess - randomNumber < 0) {
      evaluate = 'low';
    }
    else if (guess - randomNumber === 0) {
      evaluate = 'OOOOOOOOO my god!';
    }
    else {
      evaluate = 'high';
    }
    return evaluate;
}

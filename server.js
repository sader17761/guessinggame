//requires area
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(2345, function(){
    console.log('server is up on 2345');
});// end listen

app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('view/index.html'));
});// end get

app.post('/maxNumber', function(req, res) {
  console.log(req.body);
});// end post

var express = require('express');
var app = express();
var path = require('path');
var port = 5000;
var input1;
var input2;
var operator;
var answer;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.post('/calculate', function(req, res){
  var calculation = req.body;    //this is the DATA we set to data  on ajax post on client
  console.log(calculation);
  input1 = calculation.input1;
  input2 = calculation.input2;
  operator = calculation.operator;
  logic();
  console.log(answer);
  res.send({messege:'Successfully added our project!'});
});

app.get('/calculate', function (req, res){
  console.log('sending calc');
  answer = answer.toString();
  res.send(answer);
});
app.get('/*', function (req,res){
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname,'/public', file));
});

app.listen(port, function(){
  console.log('Server is listening on port ', port);
});

function logic(){
  if (operator == 'add') {
    answer = parseInt(input1) + parseInt(input2);
  }
  else if (operator == 'subtract') {
    answer =parseInt(input1) - parseInt(input2);
  }
  else if (operator == 'multiply') {
    answer = parseInt(input1) * parseInt(input2);
  }
  else if (operator == 'divide') {
    answer = parseInt(input1) / parseInt(input2);
  }
}

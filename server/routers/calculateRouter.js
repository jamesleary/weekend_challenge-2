var express = require('express');
var router = express.Router();

var input1;
var input2;
var operator;
var answer;

router.post('/', function(req, res){
  var calculation = req.body;    //this is the DATA we set to data  on ajax post on client
  console.log(calculation);
  input1 = calculation.input1;
  input2 = calculation.input2;
  operator = calculation.operator;
  logic();
  console.log(answer);
  res.send({messege:'Successfully added our project!'});
});

router.get('/', function (req, res){
  console.log('sending calc');
  answer = answer.toString();
  res.send(answer);
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
module.exports = router;

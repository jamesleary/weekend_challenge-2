var express = require('express');
var router = express.Router();
var logic = require('../myModules/logic.js');
var answer;





router.post('/', function(req, res){
  var calculation = req.body;    //this is the DATA we set to data  on ajax post on client
  console.log(calculation);

  answer = logic(calculation);
  
  res.send({messege:'Successfully added our project!'});
});

router.get('/', function (req, res){
  console.log('sending calc');
  answer = answer.toString();
  res.send(answer);
});

module.exports = router;

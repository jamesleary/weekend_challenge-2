var input1;
var input2;
var operator;
var answer;

function logic(calculation){
  input1 = calculation.input1;
  input2 = calculation.input2;
  operator = calculation.operator;
  console.log('Hello');
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
  return answer;
}

module.exports = logic;

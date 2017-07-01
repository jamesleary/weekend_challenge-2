console.log('JS Sourced');
var input1;
var input2;
var operator;
$(document).ready(function(){
  numberClick();
  operatorSelect();
  dataSend();
  clearAll();
});//end of document.ready
//on click, put numbers into inputfield
function numberClick(){
  $('.number').on('click', function(){
    $('.inputfield').text($('.inputfield').text()+ $(this).attr('id'));
    if (!operator) {
      input1 = $('.inputfield').text();
      console.log(input1);
    }
    else if (operator) {
      input2 = $('.inputfield').text();
    }
  });//end of number
}
//when an operator is clicked,empty the input field and set the operator to send
function operatorSelect(){
  $('.operator').on('click',function(){
    $('.inputfield').empty();
    operator  = $(this).attr('id');
    console.log(operator);
  });//end of operator functionality
}
//send variables to the server and send back the result as a number
function dataSend(){$('#calculate').on('click',function(){
  $.ajax({
    type:"POST",
    url:"/calculate",
    data:{
      input1:input1,
      input2:input2,
      operator:operator
    },
    success: function(response){
      console.log('success POST');
      dataReceive();
    }
  });
});//end of calculate
}
//send back the answer with the given data
function dataReceive(){
  $.ajax({
    type:"GET",
    url:"/calculate",
    success: function(response){
      console.log(response);
      parseInt(response);
      $('.inputfield').text(response);
    }
  });
}
//clear button resets the calculator
function clearAll(){
  $('.clear').on('click', function(){
    $('.inputfield').empty();
    input1 = 0;
    input2 = 0;
    operator = 0;

  });//end of clear all
}

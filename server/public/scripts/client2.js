console.log('JS Sourced');
var input1;
var input2;
var operator;

$(document).ready(function(){

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

  $('.operator').on('click',function(){
    $('.inputfield').empty();
    operator  = $(this).attr('id');
    console.log(operator);
  });//end of operator functionality

  $('#calculate').on('click',function(){
    console.log('====');
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

  $('.clear').on('click', function(){
    $('.inputfield').empty();
    input1 = 0;
    input2 = 0;
    operator = 0;

  });




});//end of document.ready

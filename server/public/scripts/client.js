console.log('JS Sourced');
var input1;
var input2;
var operator;
$(document).ready(function(){
  console.log('jQuery Sourced');
  clickHandlers();

});


function clickHandlers (){
  $('#add').on('click', function(){
    console.log('add');
    $('#placeholder').text('+');
    operator = 'add';
  });
  $('#subtract').on('click', function(){
    console.log('subtract');
    $('#placeholder').text('-');
    operator = 'subtract';
  });
  $('#divide').on('click', function(){
    console.log('divide');
    $('#placeholder').text('/');
    operator = ('divide');
  });
  $('#multiply').on('click', function(){
    console.log('multiply');
    $('#placeholder').text('*');
    operator = ('multiply');
  });
  $('#calculate').on('click', function(){
    console.log('calculate');
    input1 = $('#variable1').val();
    input2 = $('#variable2').val();

    console.log(input1);
    console.log(input2);
    console.log(operator);
    dataSend();
  });
}//end of clickHandlers

function dataSend (){
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
}//end of dataSend

function dataReceive(){
  $.ajax({
    type:"GET",
    url:"/calculate",
    success: function(response){
      console.log(response);
      
    }
  });
}

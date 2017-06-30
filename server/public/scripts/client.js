console.log('JS Sourced');
$(document).ready(function(){
  console.log('jQuery Sourced');
clickHandlers();
});


function clickHandlers (){
  $('#add').on('click', function(){
    console.log('add');
  });
  $('#subtract').on('click', function(){
    console.log('subtract');
  });
  $('#divide').on('click', function(){
    console.log('divide');
  });
  $('#multiply').on('click', function(){
    console.log('multiply');
  });
  $('#calculate').on('click', function(){
    console.log('calculate');
  });


}//end of clickHandlers

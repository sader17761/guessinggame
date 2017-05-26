console.log('js');
$(onReady);
function onReady(){
  console.log('jq');
  $('#startButton').on('click', startGame);
  $('#resetButton').on('click', resetGame);
}

function resetGame(){
  console.log('button reset');
  $('#setup').show();
  $('#play').hide();
}

function startGame(){
  console.log('button start');
  $('#setup').hide();
  $('#play').show();
  console.log($('#maxNumberIn').val());
  var maxNumberToSend = {
    max: $('#maxNumberIn').val()
  };// end object
  $.ajax ({
    type: 'POST',
    url: '/maxNumber',
    data: maxNumberToSend,
    success: function(response) {
      console.log('response is: ', response);
    }// end ajax

  });// end startGame
}

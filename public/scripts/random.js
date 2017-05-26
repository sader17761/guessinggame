console.log('js');
$(onReady);
function onReady(){
  console.log('jq');
  $('#startButton').on('click', startGame);
  $('#resetButton').on('click', resetGame);
  $('#guessButton').on('click', guessGame);
}
var clicks = 0;

function guessGame(){
  clicks++;
  $('#counter').text('number of guesses ' + clicks);
  console.log($('#player1').val());
  console.log($('#player2').val());
  console.log($('#player3').val());
  console.log($('#player4').val());
  console.log($('#player5').val());
  console.log($('#player6').val());
  var playerGuessesToSend = {
    player1: $('#player1').val(),
    player2: $('#player2').val(),
    player3: $('#player3').val(),
    player4: $('#player4').val(),
    player5: $('#player5').val(),
    player6: $('#player6').val()
  }; // end of playerGuessesToSend
  $.ajax({
    type: 'POST',
    url: '/playerGuesses',
    data: playerGuessesToSend,
    success: function(response){
      console.log('response in guesses: ', response);
      $('#p1').text(response.player1);
      $('#p2').text(response.player2);
      $('#p3').text(response.player3);
      $('#p4').text(response.player4);
      $('#p5').text(response.player5);
      $('#p6').text(response.player6);
    } // end ajax
  });
}

function resetGame(){
  console.log('button reset');
  $('#setup').show();
  $('#play').hide();
  clicks = 0;
  $('#counter').text('number of guesses ' + clicks);
$('#player1').val('');
$('#player2').val('');
$('#player3').val('');
$('#player4').val('');
$('#player5').val('');
$('#player6').val('');
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
$('#max').text('Max Number ' + $('#maxNumberIn').val());
}

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
}

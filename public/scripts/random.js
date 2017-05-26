console.log('js');
$(onReady);
function onReady(){
  console.log('jq');
  $('#startButton').on('click', startGame);
}

function startGame(){
  console.log('button start');
  $('#setup').hide();
  $('#play').show();
}

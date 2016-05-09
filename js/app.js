$(document).ready(function() {

  //How many wins
  var playerXWins = 0;
  var playerOWins = 0;

  //Total num of wins
  var playerXTotal = 0;
  var playerOTotal = 0;

  var position = [
    NaN, NaN, NaN, NaN,
    NaN, NaN, NaN, NaN,
    NaN, NaN, NaN, NaN,
    NaN, NaN, NaN, NaN
  ];

  //Player vars
  var playerX = 'X';
  var playerO = 'O';
  var currentPlayer = null;

  function setNextTurn(){
    if (currentPlayer === playerX) {
      currentPlayer = playerO;
    }
    else {
      currentPlayer = playerX;
    }
    //TODO
    //update text
    $('#messages').text(currentPlayer);
  }

  function checkForWinner(){
    //NaN === NaN is always false
    if (positions[0] === positions[1] &&
        positions[1] === positions[2] &&
        positions[2] === positions[3] &&
        positions[3] === positions[4] ||

        positions[4] === positions[5] &&
        positions[5] === positions[6] &&
        positions[6] === positions[7] &&
        positions[7] === positions[8] ||

        positions[8] === positions[9] &&
        positions[9] === positions[10] &&
        positions[10] === positions[11] &&
        positions[11] === positions[12] ||

        positions[12] === positions[13] &&
        positions[13] === positions[14] &&
        positions[14] === positions[15]
        )
      {
      console.log('winner?!');
      }
  }

  $('document').on('click', '#board .position', function(i) {
    var positionNumber = $(i.clickTarget).index();
    console.log('You clicked on ' + positionNumber);

    spaces[positionNumber] = currentPlayer;

    $('#board .position:eq(' + positionNumber + ')').addClass(currentPlayer);

    checkForWinner();
    setNextTurn();
  });
  $(document).on('gameWin', function (winner) {
    //Alert Winner
  });
  setNextTurn();
});

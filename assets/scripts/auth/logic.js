'use strict';
let winArray = [null, null, null, null, null, null, null, null, null];
let playerOne = false;
let idOfButton = "#";
let buttonNumber = '';
/*
win conditions
all the same:
[0,1,2] n, n+1, n+2
[0,4,6] n, n+4, n+6
[0,4,8] n, n+4, n+8
[1,4,7] n, n+3, n+6
[2,4,6] n, n+2, n+4
[2,5,8] n, n+3, n+6
[3,4,5] n, n+1, n+2
[6,7,8] n, n+1, n+2
*/
//final test to end the game

const togglePlayer = function() {
  playerOne = !playerOne;
};

const getButtonId = function(){
  idOfButton = "#";
  idOfButton += this.getAttribute('id');
  return idOfButton;
};
  const getButtonNumber = function (idOfButton) {
  switch(idOfButton) { //switch statement to change text to numbers
    case '#zero':
      buttonNumber = "0";
      break;
    case '#one':
      buttonNumber ="1";
      break;
    case '#two':
      buttonNumber ="2";
      break;
    case '#three':
      buttonNumber ="3";
      break;
    case '#four':
      buttonNumber ="4";
      break;
    case '#five':
      buttonNumber ="5";
      break;
    case '#six':
      buttonNumber ="6";
      break;
    case '#seven':
      buttonNumber ="7";
      break;
    case '#eight':
      buttonNumber ="8";
      break;
  }
  return buttonNumber;
};
const checkGameState = function() {
  let thisTurn;
  if(playerOne) {
      thisTurn = "X";
  } else {
    thisTurn = "O";
  }
  document.querySelector(idOfButton).innerHTML = thisTurn;
  //TODO change text to X or O!
  winArray[getButtonNumber(idOfButton)] = thisTurn;
  //hard coded X
    if(!(winArray.includes(null))) {
    console.log("it's over! play again?");
    document.getElementById('hide-modal-button').innerHTML = '<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Game Over!</button>';

    //TODO end game somehow and also be able to start it over
  }
};
module.exports = {
  checkGameState,
  getButtonId,
  togglePlayer,
};

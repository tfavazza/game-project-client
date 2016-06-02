'use strict';
let winArray = [null, null, null, null, null, null, null, null, null];
let player_x = false;
let idOfButton = "#";
let buttonNumber = '';

const addTheButtonBack = function() {
  $('#myModal').modal({
        'data-toggle': 'modal',
    });
};



const aWinHappened = function(piece1, piece2, piece3) {
    let arr = winArray;
    let spot1 = arr[piece1];
    if (spot1 === null) {
      return false;
    }
    var spot2 = arr[piece2];
    if (spot1 !== spot2) {
      return false;
    }
    var spot3 = arr[piece3];
    if (spot1 !== spot3) {
      return false;
    }
      console.log("Player " + spot1 + " wins!");
      addTheButtonBack();
    return true;
  };
  const checkForWins = function(arr) {
    console.log(arr);
    aWinHappened(0, 1, 2);
    aWinHappened(0, 3, 6);
    aWinHappened(0, 4, 8);
    aWinHappened(1, 4, 7);
    aWinHappened(2, 4, 6);
    aWinHappened(2, 5, 8);
    aWinHappened(3, 4, 5);
    aWinHappened(6, 7, 8);
  };

  //final test to end the game


const togglePlayer = function() {
  player_x = !player_x;
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
      buttonNumber = "1";
      break;
    case '#two':
      buttonNumber = "2";
      break;
    case '#three':
      buttonNumber = "3";
      break;
    case '#four':
      buttonNumber = "4";
      break;
    case '#five':
      buttonNumber = "5";
      break;
    case '#six':
      buttonNumber = "6";
      break;
    case '#seven':
      buttonNumber = "7";
      break;
    case '#eight':
      buttonNumber = "8";
      break;
  }
  return buttonNumber;
};
const checkGameState = function() {
  let thisTurn;
  if(player_x) {
      thisTurn = "X";
  } else {
    thisTurn = "O";
  }
  document.querySelector(idOfButton).innerHTML = thisTurn;
    winArray[getButtonNumber(idOfButton)] = thisTurn;
    checkForWins(winArray);
    if(!(winArray.includes(null))) {
    console.log("it's over! play again?");
    addTheButtonBack();
    //TODO end game somehow and also be able to start it over
  }
};
module.exports = {
  checkGameState,
  getButtonId,
  togglePlayer,
};

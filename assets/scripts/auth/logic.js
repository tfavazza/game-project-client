'use strict';
let winArray = [null, null, null, null, null, null, null, null, null];
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
const checkGameState = function() {
  if(!(winArray.includes(null))) {
    console.log("it's over! play again?");
    //end game somehow
  }
};

module.exports = {
  checkGameState,
};

'use strict';
const logic = require('./logic');
let gameJSON = {};
const makeGameData = () => {
  let theIdNumber = logic.getButtonNumber(logic.getButtonId);
  let isOver = logic.checkForWins(logic.winArray);
  let gameJSON = {
             "game": {
               "cell": {
                   "index": theIdNumber,
                   "value": logic.winArray[theIdNumber],
           },
           "over": isOver,
         }
       };
       console.log("here is some game json maybe?" + gameJSON);
};

module.exports = {
  makeGameData,
  gameJSON,
};

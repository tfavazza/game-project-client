'use strict';

const app = require('../app.js');
const api = require('./api.js');

const success = () => {
  //console.log(data);
};

const failure = () => {
  //console.error(error);
};

const signUpSuccess = (data) => {
  //app.user = data.user;
  api.signIn(data.user); //TODO make this work
  $('#myModal').modal('hide');
  //console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#myModal').modal('hide');
  $("#sign-in-button-text").text("Change Password");
  $("#sign-out").show();
  //console.log(app);
};
const signOutSuccess = function () {
  app.user = null;
  $("#sign-in-button-text").text("Sign In/Register");
  $("#sign-out").hide();
  //console.log(app);
};

const newGameSuccess = (data) => {
  app.game = data.game;
  console.log(app);
};

const updateGameSuccess = (data) => {
  app.game = data.game;
  //console.log(app);
};

const changePassFailure = () =>{
  $("#password-change-failure").text("Your old password was entered incorrectly.");
};

const getAllGamesSuccess = (data) => {
  app.games = data.games;
  console.log(app);
  $('#game-stats-div').text("You have played " + app.games.length + " games!");
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  newGameSuccess,
  updateGameSuccess,
  signUpSuccess,
  changePassFailure,
  getAllGamesSuccess,
};

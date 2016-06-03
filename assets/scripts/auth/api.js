'use strict';
const app = require('../app.js');
const logic = require('./logic.js');

const signUp = function (data) {
  return $.ajax(
     {
      url: app.host + '/sign-up/',
      method: 'POST',
      data: data,
    });
};

const signIn = function (data) {
  return $.ajax(
    {
      url: app.host + '/sign-in',
      method: 'POST',
      data: data,
    });
};

const signOut = function () {
  return $.ajax(
    {
      url: app.host + '/sign-out/:' + app.user.id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });
};

const changePass = function (data) {
  return $.ajax({
    url: app.host + '/change-password/:' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const showGames = function() { //showGames GET	/games	games#index
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const createGame = function() { //createGame POST	/games	games#create
  return $.ajax({
    url: app.host + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getGameById = function(id) { //getGameById GET	/games/:id	games#show
  return $.ajax({
    url: app.host + 'games/:' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};


const updateGame = function (data) {
  return $.ajax({
    url: app.host + '/games/:' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

// const watchGameById = function(id) { //watchGameById GET	/games/:id/watch	games#watch
//   return $.ajax({
//     url: app.host + 'games/:' + id + '/watch',
//     method: 'GET',
//   });
// };



module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
  showGames,
  createGame,
  getGameById,
  updateGame,
  //watchGameById,
};

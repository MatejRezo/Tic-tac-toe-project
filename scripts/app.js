let editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
let editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
let player1name = document.querySelector(".player1-name");
let player2name = document.querySelector(".player2-name");

const playername = document.getElementById("playername");
const setPlayerNameBtn = document.getElementById("setPlayerNameBtn");
const modal = document.querySelector(".modal");
const backdrop = document.getElementById("backdrop");
const cancel = document.getElementById("cancel");

editPlayer1BtnElement.onclick = function () {
  editPlayer2BtnElement = false;
  editPlayer1BtnElement = true;
  openPlayerConfig();
};

editPlayer2BtnElement.onclick = function () {
  editPlayer1BtnElement = false;
  editPlayer2BtnElement = true;
  openPlayerConfig();
};

setPlayerNameBtn.addEventListener("click", setPlayerName);

cancel.addEventListener("click", cancelPlayerName);

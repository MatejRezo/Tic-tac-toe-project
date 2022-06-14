let editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
let editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
let player1name = document.querySelector(".player1-name");
let player2name = document.querySelector(".player2-name");
let winner = document.getElementById("winner");
let player1Score = document.getElementById("player1-score");
let player2Score = document.getElementById("player2-score");
let drawScore = document.getElementById("draw-score");

const playername = document.getElementById("playername");
const setPlayerNameBtn = document.getElementById("setPlayerNameBtn");
const modal = document.querySelector(".modal");
const backdrop = document.getElementById("backdrop");
const cancel = document.getElementById("cancel");
const startGameBtn = document.getElementById("start-game-button");
const activeGame = document.getElementById("active-game");
const activePlayerName = document.querySelector(".active-player-name");
const gameOverTab = document.getElementById("game-over");
const gameEndedDraw = document.getElementById("game-ended-in-draw");

const scoreTab = document.getElementById("score-tab");

const allblockElements = document.querySelectorAll("#game-board li");
const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const block4 = document.getElementById("block4");
const block5 = document.getElementById("block5");
const block6 = document.getElementById("block6");
const block7 = document.getElementById("block7");
const block8 = document.getElementById("block8");
const block9 = document.getElementById("block9");

let gameOver = false;

editPlayer1BtnElement.onclick = () => {
  editPlayer2BtnElement = false;
  editPlayer1BtnElement = true;
  playername.value = "";
  openPlayerConfig();
};

editPlayer2BtnElement.onclick = () => {
  editPlayer1BtnElement = false;
  editPlayer2BtnElement = true;
  playername.value = "";
  openPlayerConfig();
};

startGameBtn.onclick = () => {
  activeGame.style.display = "block";
  startNewGame();
};

setPlayerNameBtn.addEventListener("click", setPlayerName);
cancel.addEventListener("click", cancelEditingPlayerName);

block1.onclick = () => {
  allInOneFunction(block1);
};

block2.onclick = () => {
  allInOneFunction(block2);
};

block3.onclick = () => {
  allInOneFunction(block3);
};

block4.onclick = () => {
  allInOneFunction(block4);
};

block5.onclick = () => {
  allInOneFunction(block5);
};

block6.onclick = () => {
  allInOneFunction(block6);
};

block7.onclick = () => {
  allInOneFunction(block7);
};

block8.onclick = () => {
  allInOneFunction(block8);
};

block9.onclick = () => {
  allInOneFunction(block9);
};

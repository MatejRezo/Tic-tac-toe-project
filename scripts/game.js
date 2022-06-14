let isPlayer1Turn;
let isPlayer2Turn;

function player1Turn() {
  isPlayer1Turn = true;
  isPlayer2Turn = false;
}

function player2Turn() {
  isPlayer1Turn = false;
  isPlayer2Turn = true;
}

function addXtoBlock(clickedblock) {
  clickedblock.textContent = "X";
}

function addOtoBlock(clickedblock) {
  clickedblock.textContent = "O";
}

function switchPlayerTurn() {
  if (isPlayer2Turn) {
    isPlayer1Turn = true;
    isPlayer2Turn = false;
  } else {
    isPlayer1Turn = false;
    isPlayer2Turn = true;
  }
}

function startNewGame() {
  for (let block of allblockElements) {
    block.textContent = "";
    enableAllblocks(block);
  }
  player1Turn();
  currentlyActivePlayerName();
  gameEndedDraw.style.display = "none";
  gameOverTab.style.display = "none";
  gameOver = false;
  itIsDraw = false;
}

function currentlyActivePlayerName() {
  if (isPlayer1Turn) {
    activePlayerName.textContent = player1name.innerHTML;
  } else {
    activePlayerName.textContent = player2name.innerHTML;
  }
}

function isPlayer1orPlayer2(block) {
  if (isPlayer1Turn == true) {
    addXtoBlock(block);
    player2Turn();
  } else {
    addOtoBlock(block);
    player1Turn();
  }
}
//----------------------------------------ONCLICK FUNCTIONS ALL IN ONE----------------------------------------------
function allInOneFunction(block) {
  if (!gameOver) {
    isPlayer1orPlayer2(block);
    disableblock(block);
    currentlyActivePlayerName();
    is3InRow();
    isDraw();
    itEndedInDraw();
    itsGameOver();
  }
}

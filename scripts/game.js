let isPlayer1Turn;
let isPlayer2Turn;

function switchPlayerTurn() {
  if (isPlayer2Turn) {
    isPlayer1Turn = true;
    isPlayer2Turn = false;
  } else {
    isPlayer1Turn = false;
    isPlayer2Turn = true;
  }
}

function player1Turn() {
  isPlayer1Turn = true;
  isPlayer2Turn = false;
}

function player2Turn() {
  isPlayer1Turn = false;
  isPlayer2Turn = true;
}

function startNewGame() {
  for (let block of allblockElements) {
    block.textContent = "";
    player1Turn();
    enableAllblocks(block);
    currentlyActivePlayerName();
    gameOverTab.style.display = "none";
  }
  gameOver = false;
}

function currentlyActivePlayerName() {
  if (isPlayer1Turn) {
    activePlayerName.textContent = player1name.innerHTML;
  } else {
    activePlayerName.textContent = player2name.innerHTML;
  }
}

function addXtoBlock(clickedblock) {
  clickedblock.textContent = "X";
}

function addOtoBlock(clickedblock) {
  clickedblock.textContent = "O";
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
//----------------------------------------!!! Is it game over & awarding points !!!----------------------------------------------

let gameOver = false;

function is3InRow() {
  if (
    block1.innerHTML != "" &&
    block1.innerHTML === block2.innerHTML &&
    block2.innerHTML === block3.innerHTML
  ) {
    isGameOver();
  } else if (
    block1.innerHTML != "" &&
    block1.innerHTML === block5.innerHTML &&
    block5.innerHTML === block9.innerHTML
  ) {
    isGameOver();
  } else if (
    block1.innerHTML != "" &&
    block1.innerHTML === block4.innerHTML &&
    block4.innerHTML === block7.innerHTML
  ) {
    isGameOver();
  } else if (
    block2.innerHTML != "" &&
    block2.innerHTML === block5.innerHTML &&
    block5.innerHTML === block8.innerHTML
  ) {
    isGameOver();
  } else if (
    block3.innerHTML != "" &&
    block3.innerHTML === block5.innerHTML &&
    block5.innerHTML === block7.innerHTML
  ) {
    isGameOver();
  } else if (
    block3.innerHTML != "" &&
    block3.innerHTML === block6.innerHTML &&
    block6.innerHTML === block9.innerHTML
  ) {
    isGameOver();
  } else if (
    block4.innerHTML != "" &&
    block4.innerHTML === block5.innerHTML &&
    block5.innerHTML === block6.innerHTML
  ) {
    isGameOver();
  } else if (
    block7.innerHTML != "" &&
    block7.innerHTML === block8.innerHTML &&
    block8.innerHTML === block9.innerHTML
  ) {
    isGameOver();
  }
}

function isGameOver() {
  gameOver = true;
  console.log(gameOver);
  gameOverTab.style.display = "block";
  switchPlayerTurn()
}

function isDraw(){
    if(block1.innerHTML != "" && 
    block2.innerHTML != "" &&
    block3.innerHTML != "" &&
    block4.innerHTML != "" &&
    block5.innerHTML != "" &&
    block6.innerHTML != "" &&
    block7.innerHTML != "" &&
    block8.innerHTML != "" &&
    block9.innerHTML != "" &&
    !gameOver
    ){  console.log("game is draw");
// I WILL ADD NEW POP UP FOR WHEN ITS DRAW
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

  }
  if(gameOver){
    currentlyActivePlayerName();
    winner.innerHTML =  activePlayerName.textContent;
  }
}

//----------------------------------------testing it like this 1st-------its too loong I will change it----------------------------------------------
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

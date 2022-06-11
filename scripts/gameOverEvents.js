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
  switchPlayerTurn();
  disableHoverOnElements();
}

function itsGameOver() {
  if (gameOver) {
    currentlyActivePlayerName();
    winner.innerHTML = activePlayerName.textContent;
    scoring();
    scoreUpdate();
  }
}

let drawScoreValue = 0;
let player1ScoreValue = 0;
let player2ScoreValue = 0;

function scoreUpdate() {
  player1Score.innerHTML = player1ScoreValue;
  player2Score.innerText = player2ScoreValue;
  drawScore.innerText = drawScoreValue;
}

function scoring() {
  if (winner.innerHTML === player2name.innerHTML) {
    player2ScoreValue++;
  } else if (winner.innerHTML === player1name.innerHTML) {
    console.log("pobjedio je player 1");
    player1ScoreValue++;
  }
}

function disableHoverOnElements() {
  for (let block of allblockElements) {
    if (block.classList.contains("element_hover"))
      block.classList.remove("element_hover");
  }
}

let itIsDraw = false;
function isDraw() {
  if (
    block1.innerHTML != "" &&
    block2.innerHTML != "" &&
    block3.innerHTML != "" &&
    block4.innerHTML != "" &&
    block5.innerHTML != "" &&
    block6.innerHTML != "" &&
    block7.innerHTML != "" &&
    block8.innerHTML != "" &&
    block9.innerHTML != "" &&
    !gameOver
  ) {
    itIsDraw = true;
    drawScoreValue++;
    scoreUpdate();
  }
}

function itEndedInDraw() {
  if (itIsDraw) {
    gameEndedDraw.style.display = "block";
  }
}

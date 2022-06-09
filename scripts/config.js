function openPlayerConfig() {
  modal.style.display = "block";
  backdrop.style.display = "block";
}

//PLAYER CAN STILL LEAVE EMPTY....VALIDATION NEEDED
function setPlayerName() {
  if (editPlayer1BtnElement == true) {
    player1name.textContent = playername.value;
  } else if (editPlayer2BtnElement == true) {
    player2name.textContent = playername.value;
  }
  modal.style.display = "none";
  backdrop.style.display = "none";
  event.preventDefault();
}

function cancelEditingPlayerName() {
  modal.style.display = "none";
  backdrop.style.display = "none";
  editPlayer1BtnElement = "false";
  editPlayer2BtnElement = "false";
}

function validateForm() {}

// playername=
// setPlayerNameBtn

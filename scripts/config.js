function openPlayerConfig() {
  modal.style.display = "block";
  backdrop.style.display = "block";
}

//PLAYER CAN STILL LEAVE EMPTY....VALIDATION NEEDED
function setPlayerName() {
  if (playername.value != "") {
    if (editPlayer1BtnElement == true) {
      player1name.textContent = playername.value.toUpperCase();
    } else if (editPlayer2BtnElement == true) {
      player2name.textContent = playername.value.toUpperCase();
    }
    modal.style.display = "none";
    backdrop.style.display = "none";
    event.preventDefault();
  }
}

function cancelEditingPlayerName() {
  modal.style.display = "none";
  backdrop.style.display = "none";
  editPlayer1BtnElement = "false";
  editPlayer2BtnElement = "false";
}

function enableAllblocks(block) {
  block.classList.remove("disableElement");
  block.classList.add("element_hover");
}

function disableblock(block) {
  block.classList.add("disableElement");
}

// playername=
// setPlayerNameBtn

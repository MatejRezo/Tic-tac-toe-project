function openPlayerConfig() {
  modal.style.display = "block";
  backdrop.style.display = "block";
}

function setPlayerName() {
    if(editPlayer1BtnElement == true){
        console.log(editPlayer1BtnElement);
        player1name.textContent = playername.value;
    }else if(editPlayer2BtnElement == true){
        player2name.textContent = playername.value;
    }
//   editPlayer1BtnElement = false;
//   editPlayer2BtnElement = false;
  modal.style.display = "none";
  backdrop.style.display = "none";
}

function cancelPlayerName() {
  modal.style.display = "none";
  backdrop.style.display = "none";
  editPlayer1BtnElement = "false";
  editPlayer2BtnElement = "false";
  console.log(editPlayer1BtnElement);
}

// playername=
// setPlayerNameBtn

let isPlayer1Turn;
let isPlayer2Turn;

function player1Turn(){
    isPlayer1Turn = true;
  isPlayer2Turn = false;
}

function player2Turn(){
    isPlayer1Turn = false;
    isPlayer2Turn = true;
}

function startNewGame() {
  for (let block of allblockElements) {
    block.textContent = "";
    player1Turn();
    enableAllblocks(block);
  }
}
// can't make onclick event have its old value will have to change it.....
function enableAllblocks(block){
    block.classList.remove("disabled");
    //console.log(block.onclick);
    // block.onclick= onclick;
}


//disables the clicked block
function disableblock(block) {
  block.classList.add("disabled");
  block.onclick = "";
  console.log(block.onclick);
}

function addXtoBlock(clickedblock) {
  clickedblock.textContent = "X";
}

function addOtoBlock(clickedblock) {
  clickedblock.textContent = "O";
}

function isPlayer1orPlayer2(block) {
  if (isPlayer1Turn== true) {
    addXtoBlock(block);
    player2Turn();
 } else {
    addOtoBlock(block);
    player1Turn();
   }
}
//----------------------------------------test it like this 1st-------its too loong I will change it----------------------------------------------
block1.onclick = () => {
  isPlayer1orPlayer2(block1);
  disableblock(block1);
};

block2.onclick = () => {
    isPlayer1orPlayer2(block2);
    disableblock(block2);
  };

  block3.onclick = () => {
    isPlayer1orPlayer2(block3);
    disableblock(block3);
  };

  block4.onclick = () => {
    isPlayer1orPlayer2(block4);
    disableblock(block4);
  };
// class="disabled"

let $cells = document.querySelectorAll(".cell");

let $xScore = document.getElementById("x-score");
let $yScore = document.getElementById("y-score");

let winOptions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [1, 5, 9],
];

let board = [];

let symbolType = 1;

function cellClick(cellNum) {
  // cellNum -= 1;
  if (!board[cellNum]) {
    if (symbolType === 1) {
      $cells[cellNum - 1].innerHTML = "X";
      board[cellNum] = "X";
      symbolType--;
      setTimeout(() => checkWin("X"), 100);
    } else if (symbolType === 0) {
      $cells[cellNum - 1].innerHTML = "O";
      board[cellNum] = "O";
      setTimeout(() => checkWin("O"), 100);

      symbolType++;
    }
  }
}

let xScore = 0;
$xScore.innerHTML = xScore;

let yScore = 0;
$yScore.innerHTML = yScore;

function checkWin(symbol) {
  for (let i of winOptions) {
    winCounter = 0;
    for (let c of i) {
      if (board[c] == symbol) {
        winCounter++;

        if (winCounter == 3) {
          declareWinner(symbol);
        }
      }
    }
  }
}

function declareWinner(symbol) {
  alert(`${symbol} Won!`);
  board = [];
  symbolType = 1;
  for (let i = 0; i < 9; i++) {
    $cells[i].innerHTML = "";
  }
  if (symbol == "X") {
    xScore++;
    $xScore.innerHTML = xScore;
  } else if (symbol == "O") {
    yScore++;
    $yScore.innerHTML = yScore;
  }
}

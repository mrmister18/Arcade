let gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }
  let currentPlayer = gameState.players[Math.round(Math.random())]

function switchPlayer() {
    if (currentPlayer === "x") {currentPlayer = "o"}
    else if (currentPlayer === "o") {currentPlayer = "x"}
}

function inputTurn(x, y) {
  if (!gameState.board[y][x]) {
    gameState.board[y][x] = currentPlayer
    switchPlayer()}
}

function checkAcross() {
  for (let i = 0; i < gameState.board.length; i++) {
    let boardRow = gameState.board[i]
    if (boardRow[0] === boardRow[1] && boardRow[1] === boardRow[2] && boardRow[0]) {
      return "You Win!"
    }
  }
}

function checkVertical() {
  for (let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[0][i] === gameState.board[1][i] && gameState.board[1][i] === gameState.board[2][i] && gameState.board[0][i]) {
      return "You Win!"
    }
  }
}

function checkDiagonal() {
  if (gameState.board[0][0] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[2][2] && gameState.board[0][0]) {
    console.log("You Win!")
  } else if (gameState.board[0][2] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[2][0] && gameState.board[1][1]) {
    console.log("You Win!")
  }
}

function checkWin() {
  checkAcross()
  checkVertical()
  checkDiagonal()
}

let onePlayer = document.getElementById("1Player")
let twoPlayer = document.getElementById("2Player")
let playerName = document.createElement("input")

onePlayer.addEventListener("click", function() {
  onePlayer.replaceWith(playerName)
  twoPlayer.innerText = "Computer"
})

let gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    playerNames: ["", ""]
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
let playerTwoName = document.createElement("input")
let submit = document.getElementsByClassName("submit")
let computer = document.createElement("div").innerText = "Computer"
let board = document.querySelector(".board")

onePlayer.addEventListener("click", function() {
  onePlayer.replaceWith(playerName)
  twoPlayer.replaceWith(computer)
  submit[0].innerText = "Submit"
  gameState.playerNames[1] += "Computer"
})

twoPlayer.addEventListener("click", function() {
  onePlayer.replaceWith(playerName)
  twoPlayer.replaceWith(playerTwoName)
  submit[1].innerText = "Submit"
})

submit[0].addEventListener("click", function() {
  if (playerName.value) {
    gameState.playerNames[0] += playerName.value
    playerName.replaceWith(onePlayer.innerText = playerName.value)
    submit[0].remove()
  }})

submit[1].addEventListener("click", function() {
  if (playerName.value && playerTwoName.value) {
gameState.playerNames[0] += playerName.value
    playerName.replaceWith(onePlayer.innerText = playerName.value)
gameState.playerNames[1] += playerTwoName.value
playerTwoName.replaceWith(twoPlayer.innerText = playerTwoName.value)
submit[1].remove()
  }
})

board.addEventListener("click", function(event) {
  let spot = event.target.id
  if (gameState.playerNames[0] && gameState.playerNames[1]) {
  if (spot === "one") {console.log("test complete")}
}
})


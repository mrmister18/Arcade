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

function computerTurn() {
  let potentialMoves = []
  for (let i = 0; i < gameState.board.length; i++) {
    for (let j = 0; j < gameState.board[i].length; j++) {
      if (!gameState.board[i][j]) {
        potentialMoves.push([j, i])}}
  } 
  let move = potentialMoves[Math.floor(Math.random() * potentialMoves.length)]
  inputTurn(move[0], move[1])
  updateBoard()
}

function checkAcross() {
  for (let i = 0; i < gameState.board.length; i++) {
    let boardRow = gameState.board[i]
    if (boardRow[0] === boardRow[1] && boardRow[1] === boardRow[2] && boardRow[0]) {
      return `${boardRow[0].toUpperCase()} Wins!`
    }
  }
}

function checkVertical() {
  for (let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[0][i] === gameState.board[1][i] && gameState.board[1][i] === gameState.board[2][i] && gameState.board[0][i]) {
      return `${gameState.board[0][i].toUpperCase()} Wins!`
    }
  }
}

function checkDiagonal() {
  if (gameState.board[0][0] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[2][2] && gameState.board[0][0]) {
    return `${gameState.board[0][0].toUpperCase()} Wins!`
  } else if (gameState.board[0][2] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[2][0] && gameState.board[1][1]) {
    return `${gameState.board[0][2].toUpperCase()} Wins!`
  }
}

function checkTie() {
  for (let i = 0; i < gameState.board.length; i++) {
    for (let j = 0; j < gameState.board[i].length; j++) {
      if (!gameState.board[i][j]) {return}}}
    return "Tie"
    }

function checkWin() {
  if (checkAcross()){return checkAcross()}
  else if (checkVertical()){return checkVertical()}
  else if (checkDiagonal()) {return checkDiagonal()}
  else if (checkTie()) {return checkTie()}
}

// Tried function to update Xs and Os to be uppercase but broke function for some reason
function updateBoard() {
  spotOne.innerText = gameState.board[0][0]
  spotTwo.innerText = gameState.board[0][1]
  spotThree.innerText = gameState.board[0][2]
  spotFour.innerText = gameState.board[1][0]
  spotFive.innerText = gameState.board[1][1]
  spotSix.innerText = gameState.board[1][2]
  spotSeven.innerText = gameState.board[2][0]
  spotEight.innerText = gameState.board[2][1]
  spotNine.innerText = gameState.board[2][2]
}

function playerTurn() {
  let player = [playerDisplay, playerTwoDisplay]
  player[Math.round(Math.random())].setAttribute("class", "playerTurn")
}

function playerTurnDisplay() {
  if (playerDisplay.classList.contains("playerTurn")) {
    playerDisplay.classList.toggle("playerTurn")
  playerTwoDisplay.classList.toggle("playerTurn")}
  else if (playerTwoDisplay.classList.contains("playerTurn")) {
    playerTwoDisplay.classList.toggle("playerTurn")
  playerDisplay.classList.toggle("playerTurn")
}}

let onePlayer = document.getElementById("onePlayer")
let twoPlayer = document.getElementById("twoPlayer")

let playerName = document.createElement("input")
let playerTwoName = document.createElement("input")
let submit = document.getElementsByClassName("submit")
let playerDisplay = document.getElementById("playerDisplay")
let playerTwoDisplay = document.getElementById("playerTwoDisplay")

let board = document.querySelector(".board")
let spotOne = document.getElementById("one")
let spotTwo = document.getElementById("two")
let spotThree = document.getElementById("three")
let spotFour = document.getElementById("four")
let spotFive = document.getElementById("five")
let spotSix = document.getElementById("six")
let spotSeven = document.getElementById("seven")
let spotEight = document.getElementById("eight")
let spotNine = document.getElementById("nine")

onePlayer.addEventListener("click", function() {
  onePlayer.replaceWith(playerName)
  twoPlayer.replaceWith(playerTwoDisplay)
  playerTwoDisplay.innerText = "Computer"
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
    playerDisplay.innerText = playerName.value
    playerName.replaceWith(playerDisplay)
    submit[0].innerText = ""
  }})

submit[1].addEventListener("click", function() {
  if (playerName.value && playerTwoName.value) {
gameState.playerNames[0] += playerName.value
    playerName.replaceWith(playerDisplay)
    playerDisplay.innerText = playerName.value
gameState.playerNames[1] += playerTwoName.value
playerTwoDisplay.innerText = playerTwoName.value
playerTwoName.replaceWith(playerTwoDisplay)
submit[1].innerText = ""
playerTurn()
  }
})

document.getElementById("reset").addEventListener("click", function() {
  gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    playerNames: ["", ""]
  }
  spotOne.innerText = ""
  spotTwo.innerText = ""
  spotThree.innerText = ""
  spotFour.innerText = ""
  spotFive.innerText = ""
  spotSix.innerText = ""
  spotSeven.innerText = ""
  spotEight.innerText = ""
  spotNine.innerText = ""
  document.querySelector("h1").innerText = ""
  playerDisplay.replaceWith(onePlayer)
  playerTwoDisplay.replaceWith(twoPlayer)
  playerName.value = ""
  playerTwoName.value = ""
  playerDisplay.removeAttribute("class", "playerTurn")
  playerTwoDisplay.removeAttribute("class", "playerTurn")
})

board.addEventListener("click", function(event) {
  let spot = event.target.id
  if (gameState.playerNames[0] && gameState.playerNames[1] && document.querySelector("h1").innerText === "") {
  if (spot === "one") {
    inputTurn(0, 0)
    playerTurnDisplay()
  }
  if (spot === "two") {
    inputTurn(1, 0)
    playerTurnDisplay()
  }
  if (spot === "three") {
    inputTurn(2, 0)
    playerTurnDisplay()
  }
  if (spot === "four") {
    inputTurn(0, 1)
    playerTurnDisplay()
  }
  if (spot === "five") {
    inputTurn(1, 1)
    playerTurnDisplay()
  }
  if (spot === "six") {
    inputTurn(2, 1)
    playerTurnDisplay()
  }
  if (spot === "seven") {
    inputTurn(0, 2)
    playerTurnDisplay()
  }
  if (spot === "eight") {
    inputTurn(1, 2)
    playerTurnDisplay()
  }
  if (spot === "nine") {
    inputTurn(2, 2)
    playerTurnDisplay()
  }
  if (checkWin()) {
    updateBoard()
  document.querySelector("h1").innerText = checkWin()
}
updateBoard()
}
})

board.addEventListener("click", function(event) {
  let spot = event.target.id
  if (gameState.playerNames[0] && gameState.playerNames[1] === "Computer" && document.querySelector("h1").innerText === "") {
  if (spot === "one") {
    inputTurn(0, 0)
    computerTurn()
  }
  if (spot === "two") {
    inputTurn(1, 0)
    computerTurn()
  }
  if (spot === "three") {
    inputTurn(2, 0)
    computerTurn()
  }
  if (spot === "four") {
    inputTurn(0, 1)
    computerTurn()
  }
  if (spot === "five") {
    inputTurn(1, 1)
    computerTurn()
  }
  if (spot === "six") {
    inputTurn(2, 1)
    computerTurn()
  }
  if (spot === "seven") {
    inputTurn(0, 2)
    computerTurn()
  }
  if (spot === "eight") {
    inputTurn(1, 2)
    computerTurn()
  }
  if (spot === "nine") {
    inputTurn(2, 2)
    computerTurn()
  }
  if (checkWin()) {
    updateBoard()
  document.querySelector("h1").innerText = checkWin()
}
updateBoard()
}
})
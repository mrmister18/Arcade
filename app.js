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
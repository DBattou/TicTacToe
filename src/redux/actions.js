// Actions
export const MARK_SQUARE = 'MARK_SQUARE'
export const RESET_GAME = 'RESET_GAME'
export const RESET_BOARD = 'RESET_BOARD'
export const CHANGE_CURRENT_PLAYER = 'CHANGE_CURRENT_PLAYER'
export const CHANGE_SCORE = 'CHANGE_SCORE'

// Action creators
export function markSquare(squarePosition) {
  return {
    type: MARK_SQUARE,
    squarePosition,
  }
}

export function resetGame() {
  return {
    type: RESET_GAME,
  }
}

export function resetBoard() {
  return {
    type: RESET_BOARD,
  }
}

export function changeCurrentPlayer() {
  return {
    type: CHANGE_CURRENT_PLAYER,
  }
}

export function changeScore(player) {
  return {
    type: CHANGE_SCORE,
    player,
  }
}

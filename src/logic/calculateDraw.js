import calculateWinner from './calculateWinner'

export function boardIsFull(boardState, boardSize) {
  const emptySquare = boardState.find((element) => element === '')

  if (emptySquare === undefined) return true

  return false
}

export default function calculateDraw({ boardState, boardSize }) {
  if (calculateWinner({ boardState, boardSize })) return false

  if (boardIsFull(boardState, boardSize)) return true

  return false
}

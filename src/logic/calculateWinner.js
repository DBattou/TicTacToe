function horizontalCheck({ row, boardSize }) {
  const player = row[0]

  if (player === '') return false

  for (let i = 0; i < boardSize; i++) if (row[i] !== player) return false

  return true
}

export default function calculateWinner({ boardState, boardSize }) {
  debugger

  if (!boardState || !boardSize) return false

  for (let i = 0; i < boardSize; i++) {
    const startingIndex = i * boardSize
    const endingIndex = i * boardSize + boardSize
    const row = boardState.slice(startingIndex, endingIndex)

    if (horizontalCheck({ row, boardSize })) return true
  }

  return false
}

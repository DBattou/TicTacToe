function horizontalCheck({ row, boardSize }) {
  const player = row[0]

  if (player === '') return false

  for (let i = 0; i < boardSize; i++) if (row[i] !== player) return false

  return true
}

function isAWinnerOnRows({ boardState, boardSize }) {
  for (let i = 0; i < boardSize; i++) {
    const startingIndex = i * boardSize
    const endingIndex = i * boardSize + boardSize
    const row = boardState.slice(startingIndex, endingIndex)

    if (horizontalCheck({ row, boardSize })) return true
  }

  return false
}

function vertialCheck({ col, boardSize }) {
  const player = col[0]

  if (player === '') return false

  for (let i = 0; i < boardSize; i++) if (col[i] !== player) return false

  return true
}

function isAWinnerOnColumns({ boardState, boardSize }) {
  for (let i = 0; i < boardSize; i++) {
    const col = Array(boardSize)
      .fill('')
      .map((_, index) => boardState[index * boardSize + i])

    if (vertialCheck({ col, boardSize })) return true
  }

  return false
}

function isAWinnerOnDiagonal({ boardState, boardSize }) {
  const player = boardState[0]

  if (player === '') return false

  for (let i = 0; i < boardSize; i++)
    if (boardState[i * boardSize + i] !== player) return false

  return true
}

export default function calculateWinner({ boardState, boardSize }) {
  if (!boardState || !boardSize) return false

  if (isAWinnerOnRows({ boardState, boardSize })) return true

  if (isAWinnerOnColumns({ boardState, boardSize })) return true

  if (isAWinnerOnDiagonal({ boardState, boardSize })) return true

  return false
}

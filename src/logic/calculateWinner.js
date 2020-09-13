export default function calculateWinner({ boardState, boardSize }) {
  if (!boardState || !boardSize) return false

  const row = [boardState[0], boardState[1], boardState[2]]
  const player = row[0]

  if (player === '') return false

  for (let i = 0; i < boardSize; i++) if (row[i] !== player) return false

  return true
}

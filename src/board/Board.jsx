import React, { useState, useCallback } from 'react'
import './Board.css'
import Square from '../square/Square'

function Board({ gameSize }) {
  const [gameState, setGameState] = useState(Array(gameSize * gameSize).fill(''))
  const [currentPlayer, setCurrentPlayer] = useState('X')

  const changeGameState = useCallback(
    (boardIndex) => {
      const newGameState = [...gameState]

      if (newGameState[boardIndex] === '') {
        currentPlayer === 'O'
          ? (newGameState[boardIndex] = 'O')
          : (newGameState[boardIndex] = 'X')

        setGameState(newGameState)
        const nextPlayer = currentPlayer === 'O' ? 'X' : 'O'
        setCurrentPlayer(nextPlayer)
      }
    },
    [gameState, currentPlayer]
  )

  return (
    <div className="App_board">
      {Array(gameSize * gameSize)
        .fill()
        .map((_, i) => (
          <Square
            key={`square_${i}`}
            onClick={() => changeGameState(i)}
            value={gameState[i]}
            testId={`square_${i}`}
          ></Square>
        ))}
    </div>
  )
}

export default Board

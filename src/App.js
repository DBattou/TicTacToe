import React, { useState, useCallback } from 'react'

import './App.css'
import Board from './board/Board'

function App({ gameSize }) {
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
    <div className="App">
      <Board
        gameSize={gameSize}
        gameState={gameState}
        changeGameState={changeGameState}
      ></Board>
      <button onClick={() => setGameState(Array(gameSize * gameSize).fill(''))}>
        Reset
      </button>
    </div>
  )
}

export default App

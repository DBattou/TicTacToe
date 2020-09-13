import React, { useState, useCallback, useEffect } from 'react'

import './App.css'
import Board from './board/Board'
import calculateWinner from './logic/calculateWinner'

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
      }

      const nextPlayer = currentPlayer === 'O' ? 'X' : 'O'
      setCurrentPlayer(nextPlayer)
    },
    [gameState, currentPlayer]
  )

  useEffect(() => {
    const isWinner = calculateWinner({ boardState: gameState, boardSize: gameSize })

    if (isWinner) {
      const winner = currentPlayer === 'O' ? 'X' : 'O'
      alert(`THE ${winner} WIN`)
    }
  }, [gameState, currentPlayer, gameSize])

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

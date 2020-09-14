import React, { useState, useCallback, useEffect } from 'react'

import './App.css'
import Board from './components/board/Board'
import Score from './components/score/Score'
import ResetButton from './components/resetButton/ResetButton'
import calculateWinner from './logic/calculateWinner'

function App({ gameSize }) {
  const [gameState, setGameState] = useState(Array(gameSize * gameSize).fill(''))
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [score, setScore] = useState({ X: 0, O: 0 })

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

  const resetGameState = useCallback(() => {
    setGameState(Array(gameSize * gameSize).fill(''))
  }, [gameSize])

  useEffect(() => {
    const isWinner = calculateWinner({ boardState: gameState, boardSize: gameSize })

    if (isWinner) {
      const winner = currentPlayer === 'O' ? 'X' : 'O'
      alert(`THE ${winner} WIN`)
      setScore({ ...score, [winner]: score[winner] + 1 })
      resetGameState()
    }
  }, [gameState, currentPlayer, gameSize, score, resetGameState])

  return (
    <div className="App">
      <section>
        <Board
          gameSize={gameSize}
          gameState={gameState}
          changeGameState={changeGameState}
        ></Board>
        <ResetButton resetGameState={resetGameState}></ResetButton>
      </section>
      <Score score={score} />
    </div>
  )
}

export default App

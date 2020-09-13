import React from 'react'
import './Board.css'
import Square from '../square/Square'

function Board({ gameSize, gameState, changeGameState }) {
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

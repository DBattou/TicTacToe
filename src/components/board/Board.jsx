import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import './Board.css'
import Square from '../square/Square'
import {
  markSquare,
  changeCurrentPlayer,
  resetGame,
  changeScore,
} from '../../redux/actions'

function Board({ gameSize, gameState, changeGameState, winner, resetGame, changeScore }) {
  useEffect(() => {
    if (winner) {
      if (window.confirm(`Player ${winner} wins !`)) {
        resetGame()
        changeScore(winner)
      }
    }
  }, [winner, resetGame, changeScore])

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

// State
const mapStateToProps = (state) => {
  return {
    gameState: state.gameState,
    gameSize: state.gameSize,
    winner: state.winner,
  }
}

// Actions
const mapDispatchToProps = (dispatch) => {
  return {
    changeGameState: (squarePosition) => {
      dispatch(markSquare(squarePosition))
      dispatch(changeCurrentPlayer())
    },
    resetGame: () => dispatch(resetGame()),
    changeScore: (player) => dispatch(changeScore(player)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)

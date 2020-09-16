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
      changeScore(winner)
    }
  }, [winner, changeScore])

  return (
    <section className="App__section-board">
      {/* <div className="Board__borderLimit"> */}
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
      {/* </div> */}
    </section>
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

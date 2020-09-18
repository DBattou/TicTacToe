import React from 'react'
import { connect } from 'react-redux'
import { resetGame, resetScore } from '../../redux/actions'
import './ResetButton.css'

function ResetButton({ resetGameState, resetGameScore }) {
  return (
    <button type="reset" className="Header__resetButton" onClick={resetGameScore}>
      Reset game
    </button>
  )
}

// Actions
const mapDispatchToProps = (dispatch) => {
  return {
    resetGameState: () => {
      dispatch(resetGame())
    },
    resetGameScore: () => {
      dispatch(resetScore())
    },
  }
}

export default connect(undefined, mapDispatchToProps)(ResetButton)

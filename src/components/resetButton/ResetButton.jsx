import React from 'react'
import { connect } from 'react-redux'
import { resetGame } from '../../redux/actions'
import './ResetButton.css'

function ResetButton({ resetGameState }) {
  return (
    <button type="reset" className="Header__resetButton" onClick={resetGameState}>
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
  }
}

export default connect(undefined, mapDispatchToProps)(ResetButton)

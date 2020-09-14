import React from 'react'
import { connect } from 'react-redux'
import { resetGame } from '../../redux/actions'

function ResetButton({ resetGameState }) {
  return <button onClick={resetGameState}>Reset</button>
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

import React from 'react'
import { resetBoard } from '../../redux/actions'
import { connect } from 'react-redux'
import './winOverlay.css'

function WinOverlay({ resetBoard, winner, currentPlayer }) {
  return winner ? (
    <div className="App__overlay" data-testid="winingOverlay">
      <div className="Overlay__text">
        <span role="img" aria-label="player">
          {currentPlayer === 'X' ? '⭕️' : '❌'}
        </span>
        <p>Gagne ! </p>
        <button type="reset" onClick={resetBoard}>
          OK
        </button>
      </div>
    </div>
  ) : null
}

// State
const mapStateToProps = (state) => {
  return {
    winner: state.winner,
    currentPlayer: state.currentPlayer,
  }
}

// Actions
const mapDispatchToProps = (dispatch) => {
  return {
    resetBoard: () => {
      dispatch(resetBoard())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WinOverlay)

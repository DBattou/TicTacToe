import React from 'react'
import { resetBoard } from '../../redux/actions'
import { connect } from 'react-redux'
import './overlay.css'

function WinOverlay({ resetBoard, draw }) {
  return draw ? (
    <div className="App__overlay" data-testid="drawOverlay">
      <div className="Overlay__text">
        <p>There is a draw !</p>
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
    draw: state.draw,
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

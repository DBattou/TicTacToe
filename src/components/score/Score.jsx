import React from 'react'
import { connect } from 'react-redux'
import './Score.css'

function Score({ score }) {
  return (
    <section className="App-score">
      <h1 className="App-score-h1">SCORE</h1>
      <p className="App-score-p1">
        <span role="img" aria-label="O">
          ⭕️
        </span>
        <span data-testid={'player_O_score'}>{score?.O}-pts</span>
      </p>
      <p className="App-score-p2">
        <span role="img" aria-label="X">
          ❌
        </span>
        <span data-testid={'player_X_score'}>{score?.X}-pts</span>
      </p>
    </section>
  )
}

// State
const mapStateToProps = (state) => {
  return {
    score: state.score,
  }
}

export default connect(mapStateToProps)(Score)

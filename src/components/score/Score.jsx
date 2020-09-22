import React from 'react'
import { connect } from 'react-redux'
import Circle from '../../icons/Circle'
import Cross from '../../icons/Cross'
import './Score.css'

function Score({ score }) {
  return (
    <section className="App__section-score">
      <h1 className="App-score-h1">SCORE</h1>
      <p className="App-score-p1">
        <Circle></Circle>
        <span data-testid={'player_O_score'}>{score?.O}-pts</span>
      </p>
      <p className="App-score-p2">
        <Cross></Cross>
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

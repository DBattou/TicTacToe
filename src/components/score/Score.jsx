import React from 'react'
import { connect } from 'react-redux'

function Score({ score }) {
  return (
    <section>
      <p>
        O score : <span data-testid={'player_O_score'}>{score?.O}points</span>
      </p>
      <p>
        X score : <span data-testid={'player_X_score'}>{score?.X}points</span>
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

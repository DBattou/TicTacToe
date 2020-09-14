import React from 'react'

function ScoreBoard({ score }) {
  return (
    <section>
      <p>
        O score : <span data-testid={'player_O_score'}>{score.O}points</span>
      </p>
      <p>
        X score : <span data-testid={'player_X_score'}>{score.X}points</span>
      </p>
    </section>
  )
}

export default ScoreBoard

import React from 'react'
import './Score.css'

function Score({ player, score, testId }) {
  return (
    <p>
      {player} score : <span data-testid={testId}>{score}points</span>
    </p>
  )
}

export default Score

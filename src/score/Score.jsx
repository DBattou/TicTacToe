import React from 'react'
import './Score.css'

function Score({ player, score }) {
  return (
    <p>
      {player}: {score}points
    </p>
  )
}

export default Score

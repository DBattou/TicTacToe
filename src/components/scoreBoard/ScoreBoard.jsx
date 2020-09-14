import React from 'react'

function ScoreBoard({ score }) {
  return (
    <section>
      {/* <Score player={'O'} score={score.O} testId={'player_O_score'}></Score> */}

      <p>
        O score : <span data-testid={'player_O_score'}>{score.O}points</span>
      </p>
      {/* <Score player={'X'} score={score.X} testId={'player_X_score'}></Score> */}

      <p>
        X score : <span data-testid={'player_X_score'}>{score.X}points</span>
      </p>
    </section>
  )
}

export default ScoreBoard

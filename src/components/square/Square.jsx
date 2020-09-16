import React, { useEffect, useState } from 'react'
import './Square.css'

function Square({ onClick, value, testId }) {
  const [player, setPlayer] = useState('')

  useEffect(() => {
    if (value) {
      setPlayer(value === 'X' ? '❌' : '⭕️')
      return
    }

    setPlayer('')
  }, [value])

  return (
    <button
      type="button"
      className="Board__square"
      onClick={onClick}
      disabled={!!value}
      data-testid={testId}
    >
      <span role="img" aria-label="player">
        {player}
      </span>
    </button>
  )
}

export default Square

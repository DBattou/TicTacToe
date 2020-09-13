import React from 'react'
import './Square.css'

function Square({ onClick, value, testId }) {
  return (
    <button
      type="button"
      className="board_square"
      onClick={onClick}
      disabled={!!value}
      data-testid={testId}
    >
      {value}
    </button>
  )
}

export default Square

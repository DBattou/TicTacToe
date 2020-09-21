import React from 'react'
import './Square.css'
import Cross from '../../icons/Cross'
import Circle from '../../icons/Circle'

function Square({ onClick, value, testId }) {
  return (
    <button
      type="button"
      className="Board__square"
      onClick={onClick}
      disabled={!!value}
      data-testid={testId}
    >
      {value === 'X' && <Cross></Cross>}
      {value === 'O' && <Circle></Circle>}
    </button>
  )
}

export default Square

import React from 'react'
import './Square.css'

function Square({ onClick, value }) {
  return (
    <button type="button" className="board_square" onClick={onClick} disabled={!!value}>
      {value}
    </button>
  )
}

export default Square

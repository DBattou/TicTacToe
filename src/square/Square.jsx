import React from 'react'
import './Square.css'

function Square() {
  return (
    <button type="button" className="board_square" onClick={() => console.log('Debug')}>
      X
    </button>
  )
}

export default Square

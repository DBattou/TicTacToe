import React from 'react'
import './Board.css'
import Square from '../square/Square'

function Board() {
  return (
    <div className="App_board">
      {/* Row 1 */}
      <Square></Square>
      <Square></Square>
      <Square></Square>

      {/* Row 2 */}
      <Square></Square>
      <Square></Square>
      <Square></Square>

      {/* Row 3 */}
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </div>
  )
}

export default Board

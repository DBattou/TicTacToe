import React from 'react'

import './App.css'
import Board from './board/Board'

function App() {
  return (
    <div className="App">
      <Board gameSize={3}></Board>
    </div>
  )
}

export default App

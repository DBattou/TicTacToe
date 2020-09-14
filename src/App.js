import React from 'react'

import './App.css'
import Board from './components/board/Board'
import Score from './components/score/Score'
import ResetButton from './components/resetButton/ResetButton'

function App() {
  return (
    <div className="App">
      <section>
        <Board />
        <ResetButton />
      </section>
      <Score />
    </div>
  )
}

export default App

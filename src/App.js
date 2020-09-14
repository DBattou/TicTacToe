import React from 'react'

import './App.css'
import Board from './components/board/Board'
import Score from './components/score/Score'
import ResetButton from './components/resetButton/ResetButton'
import CurrentPlayer from './components/currentPlayer/CurrentPlayer'

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <CurrentPlayer />
        <Board />
        <ResetButton />
        <Score />
      </div>
    </div>
  )
}

export default App

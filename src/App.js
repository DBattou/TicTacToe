import React from 'react'
import Grid from '@material-ui/core/Grid'

import './App.css'
import Board from './components/board/Board'
import Score from './components/score/Score'
import ResetButton from './components/resetButton/ResetButton'
import CurrentPlayer from './components/currentPlayer/CurrentPlayer'

function App() {
  return (
    <Grid container spacing={10} style={{ padding: '24px' }}>
      <Grid item xs={12} sm={4} md={4} xl={4} className="App-gridSection">
        <CurrentPlayer />
      </Grid>
      <Grid item xs={12} sm={4} md={4} xl={4} className="App-gridSection">
        <Board />
        <ResetButton />
      </Grid>
      <Grid item xs={12} sm={4} md={4} xl={4} className="App-gridSection">
        <Score />
      </Grid>
    </Grid>
  )
}

export default App

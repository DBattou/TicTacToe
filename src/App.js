import React from 'react'
import Grid from '@material-ui/core/Grid'

import './App.css'
import Board from './components/board/Board'
import Score from './components/score/Score'
import CurrentPlayer from './components/currentPlayer/CurrentPlayer'
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Grid container spacing={2} direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <CurrentPlayer></CurrentPlayer>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Board></Board>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Score></Score>
        </Grid>
      </Grid>
    </div>
  )
}

export default App

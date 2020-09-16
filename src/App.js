import React from 'react'
import Grid from '@material-ui/core/Grid'

import './App.css'
import Board from './components/board/Board'
import Score from './components/score/Score'
import ResetButton from './components/resetButton/ResetButton'
import CurrentPlayer from './components/currentPlayer/CurrentPlayer'

function App() {
  return (
    <div style={{ padding: '40px' }}>
      <Grid
        container
        spacing={2}
        style={{ border: '5px dotted green' }}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <CurrentPlayer></CurrentPlayer>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Board></Board>
          <ResetButton></ResetButton>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Score></Score>
        </Grid>
      </Grid>
    </div>
  )
}

export default App

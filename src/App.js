import React from 'react'
import Grid from '@material-ui/core/Grid'

import './App.css'
import Board from './components/board/Board'
import Score from './components/score/Score'
import CurrentPlayer from './components/currentPlayer/CurrentPlayer'
import Header from './components/header/Header'
import WinOverlay from './components/winOverlay/winOverlay'

function App() {
  return (
    <div className="App">
      <WinOverlay></WinOverlay>
      <Header></Header>
      <div className="App__main">
        <Grid
          container
          style={{ height: '100%', flexGrow: '1' }}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            container
            xs={12}
            sm={6}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Board></Board>
            <CurrentPlayer></CurrentPlayer>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Score></Score>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import { connect } from 'react-redux'

import './App.css'
import Board from './components/board/Board'
import Score from './components/score/Score'
import ResetButton from './components/resetButton/ResetButton'

import { resetGame, changeScore } from './redux/actions'

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

const mapStateToProps = (state) => {
  return {
    winner: state.winner,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetGame: () => dispatch(resetGame()),
    changeScore: (winner) => dispatch(changeScore(winner)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

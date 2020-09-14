import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './CurrentPlayer.css'

function CurrentPlayer({ currentPlayer }) {
  const [player, setPlayer] = useState('')

  useEffect(() => {
    if (currentPlayer) {
      setPlayer(currentPlayer === 'X' ? '❌' : '⭕️')
      return
    }

    setPlayer('')
  }, [currentPlayer])

  return (
    <section className="App-currentPlayer-container">
      <h1 className="App-currentPlayer" data-testid="currentPlayer_display">
        It's up to{' '}
        <span role="img" aria-label="player">
          {player}
        </span>{' '}
        to play
      </h1>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    currentPlayer: state.currentPlayer,
  }
}

export default connect(mapStateToProps)(CurrentPlayer)

import React from 'react'
import { connect } from 'react-redux'

function CurrentPlayer({ currentPlayer }) {
  return (
    <section>
      <p data-testid="currentPlayer_display">{`It's up to ${currentPlayer} to play`}</p>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    currentPlayer: state.currentPlayer,
  }
}

export default connect(mapStateToProps)(CurrentPlayer)

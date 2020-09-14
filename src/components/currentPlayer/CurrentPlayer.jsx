import React from 'react'
import { connect } from 'react-redux'

function CurrentPlayer({ currentPlayer }) {
  return <section>{`It's up to ${currentPlayer} to play`}</section>
}

const mapStateToProps = (state) => {
  return {
    currentPlayer: state.currentPlayer,
  }
}

export default connect(mapStateToProps)(CurrentPlayer)

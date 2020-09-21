import React from 'react'
import { connect } from 'react-redux'
import Circle from '../../icons/Circle'
import Cross from '../../icons/Cross'
import './CurrentPlayer.css'

function CurrentPlayer({ currentPlayer }) {
  return (
    <section className="App__section-currentPlayer">
      <h1 className="App-turn">TURN</h1>
      {currentPlayer === 'X' && <Cross></Cross>}
      {currentPlayer === 'O' && <Circle></Circle>}
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    currentPlayer: state.currentPlayer,
  }
}

export default connect(mapStateToProps)(CurrentPlayer)

import React from 'react'
import { resetGame } from '../../redux/actions'
import { connect } from 'react-redux'
import './Header.css'

function Header({ resetGame }) {
  return (
    <header className="App__header">
      <img
        alt="App logo, colorful tictactoe game"
        src="/icon-512x512.png"
        className="Header__logoImage"
      ></img>
      <h3 className="Header__appTitle">Tic Tac Toe</h3>
      <button type="reset" className="Header__resetButton" onClick={resetGame}>
        Reset
      </button>
    </header>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetGame: () => dispatch(resetGame()),
  }
}

export default connect(undefined, mapDispatchToProps)(Header)

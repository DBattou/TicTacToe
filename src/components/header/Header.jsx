import React from 'react'
import ResetButton from '../resetButton/ResetButton'
import './Header.css'

function Header() {
  return (
    <header className="App__header">
      <img
        alt="App logo, colorful tictactoe game"
        src="/icon-512x512.png"
        className="Header__logoImage"
      ></img>
      <h3 className="Header__appTitle">Tic Tac Toe</h3>
      <ResetButton></ResetButton>
    </header>
  )
}

export default Header

import React from 'react'
import ResetButton from '../resetButton/ResetButton'
import './Header.css'
import Logo from '../../icons/Logo'

function Header() {
  return (
    <header className="App__header">
      <Logo></Logo>
      <h3 className="Header__appTitle">Tic Tac Toe</h3>
      <ResetButton></ResetButton>
    </header>
  )
}

export default Header

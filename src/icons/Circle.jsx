import * as React from 'react'
import './Circle.css'

function Circle(props) {
  return (
    <svg
      className="Square__circle"
      viewBox="0 0 512 512"
      fill="none"
      {...props}
      data-testid="player_O"
    >
      <path
        d="M512 256c0 141.385-114.615 256-256 256S0 397.385 0 256 114.615 0 256 0s256 114.615 256 256zm-338.424 0c0 45.521 36.903 82.424 82.424 82.424 45.521 0 82.424-36.903 82.424-82.424 0-45.521-36.903-82.424-82.424-82.424-45.521 0-82.424 36.903-82.424 82.424z"
        fill="#FFE600"
      />
    </svg>
  )
}

export default Circle

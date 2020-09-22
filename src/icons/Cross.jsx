import * as React from 'react'
import './Cross.css'

function Cross(props) {
  return (
    <svg
      className="Square__cross"
      viewBox="0 0 512 512"
      fill="none"
      {...props}
      data-testid="player_X"
    >
      <path
        d="M1.659 396.721L396.72 1.659l112.879 112.875-197.534 197.531-197.531 197.531L1.659 396.721z"
        fill="red"
      />
      <path
        d="M509.599 396.721L114.534 1.659 1.659 114.534 396.72 509.596l112.879-112.875z"
        fill="red"
      />
    </svg>
  )
}

export default Cross

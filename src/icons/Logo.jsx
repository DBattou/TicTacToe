import * as React from 'react'
import './Logo.css'

function Logo(props) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 1020 1020"
      fill="none"
      {...props}
      className="Header__logo"
    >
      <path
        d="M11 258.487L258.487 11l70.711 70.71-123.744 123.744L81.711 329.198 11 258.487z"
        fill="red"
      />
      <path
        d="M329.198 258.487L81.711 11 11 81.71l247.487 247.488 70.711-70.711z"
        fill="red"
      />
      <path
        d="M510 279c60.199 0 109-48.801 109-109S570.199 61 510 61s-109 48.801-109 109 48.801 109 109 109zM850 959c60.199 0 109-48.801 109-109s-48.801-109-109-109-109 48.801-109 109 48.801 109 109 109z"
        stroke="#FFE600"
        strokeWidth={100}
      />
      <path
        d="M351 598.487L598.487 351l70.711 70.711-123.744 123.743-123.743 123.744L351 598.487z"
        fill="red"
      />
      <path
        d="M669.198 598.487L421.711 351 351 421.711l247.488 247.487 70.71-70.711z"
        fill="red"
      />
    </svg>
  )
}

export default Logo

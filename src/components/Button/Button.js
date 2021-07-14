import React from "react"
import './Button.css'

function Button(props) {
  const { variant = "primary", children, ...rest } = props
  return (
    <div className={`button ${variant}`} {...rest}>{children}woojoooo</div>
  )
}

export default Button

import React from 'react'

import "./default.css";

const Button = ({ text, onClick }) => (
  <button button class="testbutton" onClick={onClick}>
    {text}
  </button>
)

Button.defaultProps = {
    text: 'OK',
}

export default Button
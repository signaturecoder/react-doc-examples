import React from 'react'

const Display = ({text, displayValue}) => {
    console.log("Display Component Rendered.", displayValue);
  return (
    <div>This person's {text} is {displayValue}.</div>
  )
}

export default React.memo(Display)
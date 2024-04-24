import React, {useContext, useState} from 'react'
// import { ThemeContext } from '../../../App'

const Square = ({value, onButtonClick}) => {

  // const theme = useContext(ThemeContext);

  console.log("Value", value)
  return (
    <button onClick={onButtonClick} className="sqaure">{value}</button>
  )
}

export default Square
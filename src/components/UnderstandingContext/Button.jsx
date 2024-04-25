import React, { useContext } from 'react'
import { ThemeContext } from '../../../App'

export const Button = ({children, onBtnClick}) => {
    const theme = useContext(ThemeContext);
    const className = 'button button-' + theme;
    console.log("Button Component Rendered", children);
  return (
    <button className={className} onClick={onBtnClick}>{children}</button>
  )
}

export default React.memo(Button)
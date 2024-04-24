import { useContext } from "react"
import { ThemeContext } from "../../App"

export const Box = ({ children}) => {

    const theme = useContext(ThemeContext);

    console.log("theme ", theme);

    return <div className={`box-${theme}`}>{children}</div>
}
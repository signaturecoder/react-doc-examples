import { useContext } from "react";
import { ThemeContext } from "../../../App";

export const Panel = ({ title, children }) => {
    const theme = useContext(ThemeContext);
    const className = 'panel panel-' + theme;

  return (
    <section className={className}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

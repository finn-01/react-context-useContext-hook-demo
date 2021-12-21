import { useContext } from "react";
import { ThemeContext } from "./App";

function Para() {
  const theme = useContext(ThemeContext);

  return <h1 className={theme}>Hello world</h1>;
}

export default Para;

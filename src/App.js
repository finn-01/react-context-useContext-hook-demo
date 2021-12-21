import "./styles.css";
import { useState, createContext } from "react";
import Content from "./Content";

export const ThemeContext = createContext(); //Nho phai export

function App() {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <button onClick={handleTheme}>Toggle</button>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

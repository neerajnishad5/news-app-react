import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Toggle</button>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;

import "./index.css";
import { useState } from "react";
import Layout from "./components/Layout/Layout";
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleMode = () => {
    const currMode = darkTheme;
    setDarkTheme(!currMode);
  };
  return (
    <div className={darkTheme ? "App dark" : "App"}>
      <Layout toggleMode={toggleMode} dark={darkTheme} />
    </div>
  );
}

export default App;

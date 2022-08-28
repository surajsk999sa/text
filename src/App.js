import "./App.css";
import Navbar from "./components/Navbar.js";
import TextArea from "./components/TextArea";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#262626";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
        <Navbar
          navTitle="TextUtils"
          navItemOne="Home"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
           <TextArea
                headline="Enter the text to analyze below"
                mode={mode}
              />
        </div>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from "./header.js"; // Adjust the path as necessary
import Main from "./main.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <img src="./assets/home/desktop/image-hero-federal.jpg" alt="test" />
      
    </div>
  );
}

export default App;

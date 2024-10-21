import React from "react";
import "./App.css";
import Header from "./header.js"; // Adjust the path as necessary
import Main from "./main.js";
import Footer from "./footer.js";
import Welcome from "./welcom.js";
function Home() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Welcome />
      <Footer />
    </div>
  );
}

export default Home;

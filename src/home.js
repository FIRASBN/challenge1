import React from "react";
import "./App.css";
import Header from "./header.js"; // Adjust the path as necessary
import Main from "./main.js";
import Footer from "./footer.js";
import Welcome from "./welcom.js";
import Link from "./link.js";
import Cards from "./cards.js";
function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Welcome />
      <Link />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;

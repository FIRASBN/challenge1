import React from "react";
import "./App.css";
import { ReactComponent as Logo } from "./assets/icons/icon-arrow.svg";
function Link() {
  return (
    <div className="link-container">
      <div className="items-link">
        <h1>small team, big idea</h1>
        <button className="buttum"><strong>See Your Portfolio</strong><Logo /></button>
      </div>
    </div>
  );
}

export default Link;

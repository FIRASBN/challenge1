import React from "react";
import "./App.css";
import { ReactComponent as Logo } from "./assets/icons/icon-arrow.svg";
function Cards() {
  return (
    <div className="cards">
      <div className="take-container">
        <h1>Featured</h1>
        <button className="buttum-cards"><strong>See All</strong><Logo /></button>
      </div>
      <div className="img-cards">
        
      </div>
    </div>
  );
}

export default Cards;
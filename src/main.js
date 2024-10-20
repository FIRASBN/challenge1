import React from "react";
import "./App.css";
import { ReactComponent as Logo } from "./assets/icons/icon-arrow.svg";



export default function Main() {
    return (
        <main>
        <div className="containermain">
          <h1><strong>Project Paramour</strong></h1>
          <p>
            Project made for an art museum near Southwest London. <br></br>
             Project Paramour is a statement of bold, modern <br/>architecture.
          </p>
          <button><strong>See Your Portfolio</strong><Logo /></button>
        </div>
        <div >
          <ul className="pagination">
            <li><a href="#page1"><strong>01</strong></a></li>
            <li><a href="#page2"><strong>02</strong></a></li>
            <li><a href="#page3"><strong>03</strong></a></li>
            <li><a href="#page4"><strong>04</strong></a></li>
          </ul>
      </div>
      </main>
    );
}

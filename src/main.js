import React from "react";
import "./App.css";
import { ReactComponent as Logo } from "./assets/icons/icon-arrow.svg";



export default function Main() {
    return (
        <main>
        <div className="containermain">
          <h1>Project Paramour</h1>
          <p>
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
          <button>see your profile <Logo /></button>
        </div>
        <div >
          <ul className="pagination">
            <li><a href="#page1">01</a></li>
            <li><a href="#page2">02</a></li>
            <li><a href="#page3">03</a></li>
            <li><a href="#page4">04</a></li>
          </ul>
      </div>
      </main>
    );
}

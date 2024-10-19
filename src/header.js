import React from "react";
import "./App.css";
import { ReactComponent as Logo } from "./assets/logo.svg"; // Ensure the path is correct

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <Logo/>
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="#projects">Portfolio</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

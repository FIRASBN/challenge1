import React from "react";
import "./App.css";
import welcomeImage from "./assets/home/desktop/image-welcome.jpg";

function Welcome() {
  return (
    <div className="welc-container">
      <h1>Welcome</h1>
      <div className="par-container">
        <h2>
          Welcome to <span>Arch Studio</span>
        </h2>
        <p>
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
        </p>
        <p>
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </p>
        <p>
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony with the
          surrounding area to create truly stunning projects that will stand the
          test of time.
        </p>
      </div>
      <img src={welcomeImage} alt="welcome img" />
    </div>
  );
}

export default Welcome;

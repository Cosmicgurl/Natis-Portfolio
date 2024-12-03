import React from "react";
import "./Intro.css";
import small from "../src/small.png";

const Intro = () => {
  return (
    <section id="Intro">
      <div className="IntroContent">
        <span className="Hello">Hello</span>
        <span className="IntroText">
          I am <span className="IntroName">Natalie</span> <br /> Front-End
          Developer
        </span>
        <p className="IntroParagraph">
          I am a Front-End developer bla bli blupp
        </p>
      </div>
      <img
        src={small}
        alt="me"
        className="PhotoMe"
      />
    </section>
  );
};

export default Intro;

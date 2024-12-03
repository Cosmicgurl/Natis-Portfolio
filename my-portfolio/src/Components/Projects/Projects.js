import React from "react";
import "./Projects.css";
import icon from "../src/icon.png";

const Projects = () => {
  return (
    <section id="Project">
      {" "}
      <h1>My Projects</h1>
      <span className="ProjectDescription">
        I was working on diffrent types of projects. I was working on landing
        pages, Apps and{" "}
      </span>
      <div className="Projects">
        <div className="col">
          <div className="row">
            <div className="ProjectImgs">
              <img
                src={icon}
                alt="icon"
                className="ProjectImg"
                width={80}
              />
            </div>
            <div className="ProjectInfo">
              <p>I was working with Javascript HTML bla bli blub</p>
            </div>
          </div>
          <div className="row">
            <div className="ProjectImgs">
              <img
                src={icon}
                alt="icon"
                className="ProjectImg"
                width={80}
              />
            </div>
            <div className="ProjectInfo">
              <p>I was working with Javascript HTML bla bli blub</p>
            </div>
          </div>
          <div className="row">
            <div className="ProjectImgs">
              <img
                src={icon}
                alt="icon"
                className="ProjectImg"
                width={80}
              />
            </div>
            <div className="ProjectInfo">
              <p>I was working with Javascript HTML bla bli blub</p>
            </div>
          </div>
        </div>
      </div>
      <button className="ProjectButton">See more</button>
    </section>
  );
};

export default Projects;

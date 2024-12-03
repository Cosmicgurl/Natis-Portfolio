import React from "react";
import "./Skills.css";
import ui from "../src/ui.png";

const Skills = () => {
  return (
    <section id="Skills">
      <span className="SkillTitle">What I do</span>
      <span className="SkillDescription">
        {" "}
        I am a passionate frond end developer bla bla bli blub
      </span>
      <div className="SkillBars">
        <div className="SkillBar">
          <img
            src={ui}
            alt="ui"
            className="SkillImg"
          />
          <div className="SkillBarText">
            <h2>Responsive Webdesign</h2>
            <p>User interface is super important bli bla blub</p>
          </div>
        </div>
        <div className="SkillBar">
          <img
            src={ui}
            alt="ui"
            className="SkillImg"
          />
          <div className="SkillBarText">
            <h2>UI/UX Design</h2>
            <p>User interface is super important bli bla blub</p>
          </div>
        </div>
        <div className="SkillBar">
          <img
            src={ui}
            alt="ui"
            className="SkillImg"
          />
          <div className="SkillBarText">
            <h2>Static/Dynamic Pages</h2>
            <p>User interface is super important bli bla blub</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

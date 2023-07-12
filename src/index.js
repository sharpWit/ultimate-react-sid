import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import { title, descreption, skills } from "./data.js";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img src="saeed.jpg" alt="Saeed" className="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Saeed Khosravi</h1>
      <p>
        Web Developer (vanillaJS, next.js and react) UI/UX designer IA SEO
        Docker (dockerizing, creating networks and volumes, build and run
        images, Linux.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="orangered" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JS" emoji="👍" color="yellow" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

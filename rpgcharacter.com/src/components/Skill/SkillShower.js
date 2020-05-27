import React from "react";
import "./Skill.css";

export const SkillShower = (props) => (
  <li className="skill">
    <p>{props.skill}</p>
    <p>{props.amount}</p>
    <p>{props.trained}</p>
  </li>
);

import React from "react";
import "./Skill.css";

export const SkillShower = (props) => (
  <li className = "skill">
    <p className = "skill-name">{props.skill}</p>
    <p className = "trained">{props.trained}</p>
    <p className = "amount">{props.amount}</p>
  </li>
);

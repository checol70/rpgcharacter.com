import React from "react";
import "./Skill.css"

export const Skill = props => (
  <li className="skill"><p>{props.check}</p><p>{props.amount}</p><p>{props.skill}</p></li>
);
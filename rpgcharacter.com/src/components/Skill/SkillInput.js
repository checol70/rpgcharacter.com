import React from "react";
import "./Skill.css"

export const SkillInput = props => (
  <li className="skill"><input className="check" type="checkbox" value={props.check} name={props.skill} onChange={props.onChange}/>
  <p className="amount">{props.amount}</p>
  <p className="skill-name">{props.skill}</p>
  </li>
);
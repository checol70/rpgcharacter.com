import React from "react";
import "./StatItem.css"

export const StatItem = props => (
  <div className="stat-block">
      <p className="stat">{props.stat}</p>
      <p className="statId">{props.statId}</p>
      <p className="mod">{props.mod}</p>
  </div>
);

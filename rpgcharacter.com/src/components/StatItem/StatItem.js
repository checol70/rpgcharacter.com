import React from "react";
import "./StatItem.css"

export const StatItem = props => (
  <div className="stat-block">
      <p className="stat">{props.stat.value}</p>
      <p className="statId">{props.stat.abbr}</p>
      <p className="mod">{props.stat.mod}</p>
  </div>
);

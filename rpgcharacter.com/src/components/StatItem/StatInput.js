import React from "react";
import "./StatItem.css"

export const StatInput = props => (
    <div className="stat-block">
        <input className="stat" value={props.value} type="text"
            onChange={props.handleChange}
            name={props.name} />
        <p className="statId">{props.statId}</p>
        <p className="mod">{props.mod}</p>
    </div>
);

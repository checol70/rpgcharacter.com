import React, { Component } from "react";
import axios from "axios";
import { StatItem, StatInput } from "../../components/StatItem";
import "./Sheet.css";
import { SkillInput, SkillConstructor } from "../../components/Skill";
import { Stat } from "../../Constructors";

class Sheet extends Component {
  state = {
    // possibleStatCreationModes=[
    //     'Standard',
    //     'Point',
    //     'Roll'
    // ],
    creationMode: 0,
    characterName: "",
    playerName: "",
    xp: 0,
    ancestry: "",
    abilityScores: [
      new Stat("Strength", "Str", 10),
      new Stat("Dexterity", "Dex", 10),
      new Stat("Constitution", "Con", 10),
      new Stat("Intelligence", "Int", 10),
      new Stat("Wisdom", "Wis", 10),
      new Stat("Charisma", "Cha", 10),
    ],
    classDC: {},
    skills: {},
    meleeAttacks: {},
    rangeAttacks: {},
    weaponProficiencies: {},
    languages: {},
    speed: {},
    hitPoints: {},
    perception: {},
    ancestryFeats: [],
    skillFeats: [],
    generalFeats: [],
    classFeatsAndAbilities: [],
    bonusFeats: [],
    inventory: [],
  };
  componentDidMount = () => {};
  getStats = () => {
    let arr = [];
    this.state.abilityScores.foreach((element) => {
      arr.push(<statItem stat={element} />);
    });
    return arr;
  }
  render = () => {
    return (
      <div>
        <div class="stat-block">{this.getStats()}</div>
      </div>
    );
  }
}

export default Sheet;

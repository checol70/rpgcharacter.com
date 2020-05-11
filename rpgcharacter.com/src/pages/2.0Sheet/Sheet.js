import React, { Component } from "react";
//import axios from "axios";
import { StatItem, StatInput } from "../../components/StatItem";
import "./Sheet.css";
import { Stat, Skill, Item, RPGClass, Background } from "../../Constructors";

class Sheet extends Component {
  state = {
    // possibleStatCreationModes=[
    //     'Standard',
    //     'Point',
    //     'Roll'
    // ],
    // creationMode: 0,
    characterName: "",
    playerName: "",
    rpgClass: new RPGClass("Fighter", "Str", 10),
    background: new Background(),
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
    classDC: 0,
    skills: [
      new Skill("Acrobatics", "Dex", "Untrained"),
      new Skill("Arcana", "Int", "Untrained"),
      new Skill("Athletics", "Str", "Trained"),


    ],
    meleeAttacks: [],
    rangeAttacks: [],
    weaponProficiencies: [],
    languages: [],
    speed: [],
    hitPoints: 10,
    perception: new Skill("Perception", "Trained","Wis", 0, 1),
    ancestryFeats: [],
    skillFeats: [],
    generalFeats: [],
    classFeatsAndAbilities: [],
    bonusFeats: [],
    inventory: [],
    itembonuses: [],
    level: 1
  };
  componentDidMount = () => {};

  calculateItemBonuses = (bonusType)=>{
    let total = 0;
    this.state.itembonuses.forEach((element)=>{
      if(element.type == bonusType){
        total += element.bonusValue;
      }
    })
    return total;
  }

  getStats = () => {
    let arr = [];
    this.state.abilityScores.forEach((element,index) => {
      arr.push(<StatItem key ={index} stat={element} />);
    });
    return arr;
  }

  render = () => {
    return (
      <div>
        <div>{this.getStats()}</div>
        <div></div>
      </div>
    );
  }
}

export default Sheet;

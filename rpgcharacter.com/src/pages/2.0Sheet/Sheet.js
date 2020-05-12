import React, { Component } from "react";
//import axios from "axios";
import { StatItem, StatInput } from "../../components/StatItem";
import "./Sheet.css";
import { Stat, Skill, Item, RPGClass, Background, Ancestry,Feat } from "../../Constructors";

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
    background: new Background("Artisan",[["Str", "Int"],"Free"],["Crafting", "Guild Lore"], new Feat("Specialty Crafting", ["Crafting", "Downtime"], "Skill", "Gain bonuses to craft certain items", "Choose a kind of item from the options. You gain a +1 bonus to craft checks for items of that type. this bonus increases to +2 for  if you are a Master.")),
    xp: 0,
    ancestry: new Ancestry("Human", 8, "Medium", 25, ["Free", "Free"],"None",["Human","Humanoid"]),
    abilityScores: [
      new Stat("Strength", "Str", 10),
      new Stat("Dexterity", "Dex", 10),
      new Stat("Constitution", "Con", 10),
      new Stat("Intelligence", "Int", 10),
      new Stat("Wisdom", "Wis", 10),
      new Stat("Charisma", "Cha", 10),
    ],
    classDC: {},
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
  componentDidMount = () => {
    this.state.classDC = new Skill("Class DC", "Trained","Str",10 + this.calculateItemBonuses("Class DC"), this.state.level)
  };

  calculateItemBonuses = (bonusType)=>{
    let total = 0;
    this.state.itembonuses.forEach((element)=>{
      if(element.type === bonusType){
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

import React, { Component } from "react";
//import axios from "axios";
import { StatItem } from "../../components/StatItem";
import "./Sheet.css";
import {
  Heritage,
  Stat,
  Skill,
  Item,
  RPGClass,
  Background,
  Ancestry,
  Feat,
} from "../../Constructors";

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
    background: new Background(
      "Artisan",
      [["Str", "Int"], "Free"],
      ["Crafting", "Guild Lore"],
      new Feat(
        "Specialty Crafting: Blacksmithing",
        ["Crafting", "Downtime"],
        "Skill",
        "Gain bonuses to craft certain items",
        1,
        "Trained in Crafting",
        "Choose a kind of item from the options. You gain a +1 bonus to craft checks for items of that type. this bonus increases to +2 if you are a Master. as a blacksmith this bonus extends to Durable metal goods, including metal armor"
      )
    ),
    xp: 0,
    ancestry: new Ancestry("Human", 8, "Medium", 25, ["Free", "Free"], "None", [
      "Human",
      "Humanoid",
    ]),
    heritage: new Heritage(
      "Versitile",
      "Select a general feat of your choice that you meet the prerequisites of. Can be selected at any point of character creation(I.E. if you strength is too low, but you haven't finished assigning boosts.",
      new Feat(
        "Toughness",
        ["Combat", "Recovery"],
        "General",
        "Increase HP by level, reduce the DC of recovery checks by 1",
        1,
        "none",
        "You can withstand more punishment than most before succumbing. Increase your maximum Hit Points by your level. You reduce the DC of recovery checks by 1."
      )
    ),
    abilityScores: [
      new Stat("Strength", "Str", 18),
      new Stat("Dexterity", "Dex", 12),
      new Stat("Constitution", "Con", 16),
      new Stat("Intelligence", "Int", 12),
      new Stat("Wisdom", "Wis", 10),
      new Stat("Charisma", "Cha", 10),
    ],
    classDC: new Skill("ClassDC", "Str", "Trained"),
    skills: [
      new Skill("Acrobatics", "Dex", "Untrained"),
      new Skill("Arcana", "Int", "Untrained"),
      new Skill("Athletics", "Str", "Trained"),
      new Skill("Crafting", "Int", "Trained"),
      new Skill("Deception", "Cha", "Untrained"),
      new Skill("Diplomacy", "Cha", "Untrained"),
      new Skill("Intimidation", "Cha", "Untrained"),
      new Skill("Lore", "Int", "Untrained"),
      new Skill("Lore", "Int", "Untrained"),
      new Skill("Medicine", "Wis", "Untrained"),
      new Skill("Nature", "Int", "Trained"),
      new Skill("Occultism", "Int", "Untrained"),
      new Skill("Performance", "Cha", "Untrained"),
      new Skill("Religion", "Wis", "Untrained"),
      new Skill("Society", "Int", "Trained"),
      new Skill("Stealth", "Dex", "Untrained"),
      new Skill("Survival", "Wis", "Untrained"),
      new Skill("Thievery", "Dex", "Untrained"),
    ],
    meleeAttacks: [],
    rangeAttacks: [],
    weaponProficiencies: [],
    languages: [],
    speed: [],
    hitPoints: 10,
    perception: new Skill("Perception", "Trained", "Wis", 0, 1),
    ancestryFeats: [
      new Feat(
        "General Training",
        "",
        "Ancestry",
        "You gain a 1st level general feat",
        1,
        null,
        "Your adaptability manifests in your mastery of a range of useful abilities. You gain a 1st-level general feat. You must meet the feat's prerequisites, but if you select this feat during character creation you can select the feat later in the process in order to determine which prerequisites you meat. Special: You can select this feat multiple times, choosing a different feat each time.",
        null
      ),
    ],
    skillFeats: [
      //remember to display the background skill feat here, but will leave it in the background to save performance.
    ],
    generalFeats: [
      new Feat(
        "Diehard",
        ["Combat", "Recovery"],
        "General",
        "It takes more to kill you than most. You die from the dying condition at dying 5, rather than dying 4.",
        1,
        null,
        "It takes more to kill you than most. You die from the dying condition at dying 5, rather than dying 4.",
        null
      ),
    ],
    classFeatsAndAbilities: [
      new Feat(
        "Reactive Shield",
        ["Combat", "Reaction"],
        "Class",
        "When hit by a melee strike you can use a reaction to raise your shield. The shields AC bonus counts against the triggering attack",
        1,
        "You are wielding a shield",
        "You can snap your shield into place just as you would take a blow, avoiding the the hit at the last second. You immediately use the Raise a Shield action and gain your shield's bonus to AC. the circumstance bonus from the shield applies to your AC when you're determining the outcome of the triggering attack.",
        null,
        "An enemy hits you with a melee Strike"
      ),
      new Feat(
        "Attack of Opportunity",
        ["Combat", "Reaction"],
        "ClassFeature",
        "Use reaction to attack foes that leave openings",
        1,
        null,
        "Ever watchful for waknesses, you can quickly attack foes that leave an opening in their defenses. You gain the Attack of Opportunity reaction. You lash out at a foe that leaves an opening. Make a melee Strike against the triggering creature. If your attack is a critical hit and the trigger was a manipulate action you distupt that action. The Strike doesn't count toward your multiple attack penalty, and you multiple attack penalty doesn't apply to this Strike.",
        null,
        "A creature within your reach uses a manipulate action or a move action, makes a ranged attack or leaves a square during a move action it's using."
      ),
      new Feat(
        "Shield Block",
        ["Combat", "Reaction"],
        ["General"],
        "If you have your shield raised you can use your reaction to reduce the damage by the hardness of the shield. Both you and the shield take any remaining damage",
        1,
        null,
        "You snap your shield in place to ward off a blow. Your shield prevents you from taking an amount of damage up to the shield's Hadness. You and the shield each take any remaining damage, possibly breaking or destroying the shield",
        null,
        "While you have your shield raised you would take damage from a physical attack"
      ),
    ],
    bonusFeats: [],
    inventory: [
      new Item(
        "Dagger",
        "Weapon",
        null,
        [0, 0, 2, 0],
        "1d4 P",
        0.5,
        1,
        "Knife",
        ["agile", "finesse", "thrown 10 ft.", "versatile S"],
        null,
        null,
        null,
        null,
        null
      ),
      new Item(
        "Hide Armor",
        "Armor",
        "AC",
        [0,2,0,0],
        null,
        2,
        null,
        "Medium",
        
      ),
    ],
    itembonuses: [],
    level: 1,
    money: [0, 15, 0, 0],
  };
  componentDidMount = () => {
    let state = this.state;
    state.classDC = new Skill(
      "Class DC",
      "Trained",
      "Str",
      10 + this.calculateItemBonuses("Class DC"),
      this.state.level
    );
    this.setState(state);
  };

  calculateItemBonuses = (bonusType) => {
    let total = 0;
    this.state.itembonuses.forEach((element) => {
      if (element.type === bonusType) {
        total += element.bonusValue;
      }
    });
    return total;
  };

  getStats = () => {
    let arr = [];
    this.state.abilityScores.forEach((element, index) => {
      arr.push(<StatItem key={index} stat={element} />);
    });
    return arr;
  };

  render = () => {
    return (
      <div>
        <div>{this.getStats()}</div>
        <div></div>
      </div>
    );
  };
}

export default Sheet;

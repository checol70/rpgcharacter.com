import React, {Component} from "react";
import Axios from "axios";
import { StatItem, StatInput } from "../../components/StatItem";
import "./2.0Sheet.css"
import {SkillInput, SkillConstructor} from "../../components/Skill"
import { Stat } from "../../Constructors/Constructors";

class Sheet extends Component{
    state ={
        possibleStatCreationModes=[
            'Standard',
            'Point',
            'Roll'
        ],
        creationMode=0,
        characterName='',
        playerName='',
        xp=0,
        possibleAncestries=[
            'Human',
            'Dwarf',
            'Elf'
        ],
        ancestry = 0,
        abilityScores=[
            new Stat("Str",10),
            new Stat("Dex",10),
            new Stat("Con",10),
            new Stat("Int",10),
            new Stat("Wis",10),
            new Stat("Cha",10)
        ],
        classDC = {}

    }
}
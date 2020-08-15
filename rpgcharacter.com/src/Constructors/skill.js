class Skill{
    constructor(name, stat, trainingLevel, itemBonus){
        this.name = name;
        this.trainingLevel = trainingLevel;
        this.stat = stat;
        this.itemBonus = itemBonus;
    }
    calculateSkill =(level, statValue)=> {
        let trainingTotal = 0;
        this.trainingLevel === "Trained"? trainingTotal = 2:this.trainingLevel === "Expert"? trainingTotal = 4: this.trainingLevel === "Master"? trainingTotal = 6: this.trainingLevel === "Legend"? trainingTotal = 8: trainingTotal = 0;
        console.log(trainingTotal);
        console.log(this.trainingLevel);
        return statValue + trainingTotal > 0? level: 0 + trainingTotal + this.itemBonus;  
    }
}
export {Skill};
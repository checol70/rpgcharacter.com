class Item {
    Item(name,type, bonusType, cost, damage,  bulk, hands, group, traits, bonusValue, dexCap, checkPenalty, speedPenalty, strength){
        this.name = name;
        this.type = type;
        this.bonusType = bonusType;
        this.cost = cost;
        this.damage = damage;
        this.bulk = bulk;
        this.hands = hands;
        this.group = group;
        this.traits = traits;
        this.bonusValue = bonusValue;
        this.dexCap = dexCap;
        this.checkPenalty = checkPenalty;
        this.speedPenalty = speedPenalty;
        this.strength = strength;

    }
}
export{Item};
class Item {
    Item(quantity, name,type, bonusType, cost, damage,  bulk, hands, group, traits, bonusValue, dexCap, checkPenalty, speedPenalty, strength, description, uses){
        this.quantity = quantity;
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
        this.description = description;
        this.uses = uses;
    }
}
export{Item};
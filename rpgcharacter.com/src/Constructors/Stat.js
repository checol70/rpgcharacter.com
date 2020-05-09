class Stat {
    constructor(name, abbr, value) {
        this.name = name;
        this.abbr = abbr;
        this.value = value;
        this.mod = this.calcMod();
    }
    calcMod = ()=> { return (this.value - 10) / 2; }
}

export {Stat}

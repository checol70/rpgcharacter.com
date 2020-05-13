class Feat{
    Feat(name, tags, type, benefit, level, prerequisites, fullDescription, options, trigger){
        this.name = name;
        this.tags = tags;
        this.type = type;
        this.benefit = benefit;
        this.level = level;
        this.prerequisites = prerequisites;
        this.fullDescription = fullDescription;
        this.options = options;
        this.trigger = trigger;
    }
}
export{Feat};
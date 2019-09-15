export const Stat, ClassDC;
function Stat (name,value){
    this.name = name;
    this.value = value;
    this.mod = calcMod();
}
Stat.prototype.calcMod = () => (value-10)/2
function ClassDC (Stat,key,prof,item){
    this.Stat = Stat;
    this.key = key;
    this.prof = prof;
    this.item = item;
    this.value = this.calc 
}
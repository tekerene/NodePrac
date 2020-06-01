var event = require("events");
var fs = require("fs");
exports.voter =  class Voter{
    constructor(name, idNumber){
        this.name = name;
        this.idNumber = idNumber;
        this.eventEmitter = new event.EventEmitter();
    }
    registerVoter(){
        fs.writeFileSync(this.name +".txt", this.getVoterInfo());
        fs.writeFileSync('voters_list.txt', this.name+ " just registered. \n", {"encoding": "utf-8", "flag": "a+"})
    }
    exists(){
        return fs.existsSync(this.name+ ".txt");
    }
    voters(){
        fs.writeFile(`voters/${this.name}.txt`, this.getVoterInfo())
    }
    updateLogs(){
console.log(JSON.stringify(this.eventEmitter));
    }
    getVoterInfo(){
        return `Names : ${this.name} \n ID_Number: ${this.idNumber}`;
    }
}
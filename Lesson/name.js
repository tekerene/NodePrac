exports.stuName = class Stage3{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayName(){
        console.log("Hi your name is ", this.name + ' age ', this.age );
    }
};
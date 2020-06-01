exports.greet = class Greet{

    constructor(name) {
        this.name = name;
    }
    sayHello(){
        console.log("hello", this.name);
    }
}
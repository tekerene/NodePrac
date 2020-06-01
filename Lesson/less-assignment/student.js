
//MODULE FOR CREATING A STUDENT
exports.studentsRegis = class Students{
    constructor(name, age){
        this.name = name;
        this.age = age;
       
    }
    sayName(){
        console.log("Created a student: ",this.name + "age ", this.age);
    }
 
  
}
//MODULE FOR REGISTER NEW STUDENT
exports.register = class Students {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
 newName = 'sarktechno';
     registerStudent() {
console.log( 'new student register. Name:', this.name ,'and age: ', this.age);
  } 
   updateStudent(){
    
       console.log(`updated name : ${this.name} new name: ${this.newName}  and age, ${this.age}`);
  
 }
}


    

const students = require("./student");
const buffer = require('buffer')

//CREATING A STUDENT
const stuName = new students.studentsRegis('Rene ', 45);
stuName.sayName(); 


// TO REGISTER NEW STUDENT
const newStudent = new students.register('Maxine', 21);
newStudent.registerStudent();


//UPDATING STUDENT
const update = new students.register('peter', 23);
update.updateStudent();
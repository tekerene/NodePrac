exports.patient = class Patient{
    constructor(id, name, location, gender, age, blood_type, emergency_contact, last_check,identification_number){
        this.id = id;
        this.name = name;
        this.location = location;
        this.gender = gender;
        this.age = age;
        this.blood_type = blood_type;
        this.emergency_contact = emergency_contact;
        this.last_check = last_check;
        this.identification_number = identification_number;
    }


    getPatientDetails(){
        console.log(JSON.stringify(this));
    }
}


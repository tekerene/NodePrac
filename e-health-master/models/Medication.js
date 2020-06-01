exports.medication = class Medication{
    constructor(id, desc, name, extra_information){
        this.id = id;
        this.desc = desc;
        this.name = name;
        this.extra_information = extra_information;
    }

    getMedicationDetails(){
        console.log(JSON.stringify(this));
    }
}
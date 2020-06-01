exports.hospital = class Hospital{
    constructor(id, name, contact, location){
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.location = location;

    }

    getHospitalDetails(){
        console.log(JSON.stringify(this));
    }
}
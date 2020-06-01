exports.disease = class Disease{
    constructor(id, category, name){
        this.id = id;
        this.category = category;
        this.name = name;
    }

    getDiseaseDetails(){
        console.log(JSON.stringify(this));
    }
}

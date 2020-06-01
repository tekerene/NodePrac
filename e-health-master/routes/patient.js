const express = require("express");
const path = require('path');
const router = express.Router();
const patientManager = require("../models/Patient");

var patient1 = new patientManager.patient(); 
patient1.id = 1;
patient1.name = "sick man";
patient1.location = "douala";
patient1.gender = 'male';
patient1.age = 23;

var patient2 = new patientManager.patient();
patient2.id = 2;
patient2.name = "sick woman";
patient2.gender = 'female';
patient2.age = 22;

var patient3 = new patientManager.patient(); 
patient3.id = 3;
patient3.name = "sick child";
patient3.gender = 'others';
patient3.age = 34;

//list of patients
patients = [
    patient1, patient2, patient3];


router.get("/", (req, res, next)=>{
    res.render("patient/view_patient", {
        title: "Patients",
        patientsList: patients
    })
    
})
router.get('/add', function(req, res){
    res.render('patient/add_patient', {
        title: "add patients",
        patientsList: patients
    });
});
router.post("/view", (req, res, next)=>{
    res.render("patient/add_patient", {
        title: "view Patients",
        patientsList: patients
    });
    
});

router.get("/:id",(req,res)=>{
    var id = req.params.id;
    res.json(patients[id-1]);
});

router.patch("/:id", (req, res)=>{
    var id = req.params.id-1;
    //get patient
    var patientToUpdate = patients[id];
    //update information
    patientToUpdate = req.body;
    //add updated patient to array
    patients[id] = patientToUpdate;
    //send updated information
    res.render(patients);
});

//add a new patient
router.post("/", (req,res)=>{
    var patientInfo = req.body;  
    patients.push(patientInfo);
    res.json(patients);
});

router.patch("/", (req, res)=>{
    res.render("updating patient")
});

router.delete("/", (req, res)=>{
    res.send("deleting patient");
});

module.exports = router;
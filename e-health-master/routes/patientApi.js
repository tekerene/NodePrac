const express = require("express");
const path = require('path');
const router = express.Router();
const patientManager = require("../models/Patient");

var patient1 = new patientManager.patient(); 
var patient2= new patientManager.patient();
var patient3= new patientManager.patient(); 

patient1.id = 1;
patient1.name = "sick man";
patient2.id = 2;
patient2.name = "sick woman";
patient3.id = 3;
patient3.name = "sick child";

///list of patients
patients = [
    patient1, patient2, patient3   
]


router.get("/", (req, res, next)=>{
   res.json(patients);
});

router.get("/:id", (req,res)=>{
    var id = req.params.id;
    
    res.json(patients[id-1]);
});

router.patch("/:id", (req,res)=>{

    var id = req.params.id-1;
    //get patient
    var patientToUpdate = patients[id];
    //update information
    patientToUpdate = req.body;
    //add updated patient to array
    patients[id] = patientToUpdate;
    //send updated information
    res.send(patients);
})

//add a new patient
router.post("/", (req,res)=>{
    var patientInfo = req.body;  
    patients.push(patientInfo);
    res.json(patients);
});

router.patch("/", (req,res)=>{
    res.send("updating patient")
});

router.delete("/",(req,res)=>{
    res.send("deleting patient");
});

module.exports = router;
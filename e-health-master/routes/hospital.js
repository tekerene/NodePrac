const express = require("express")
const hospitalManager = require("../models/Hospital");

var router = express.Router();

//hospital list

var hospital_1 = new hospitalManager.hospital();
hospital_1.id = 1;
hospital_1.name = "Acha Annex";
hospital_1.contact = "394394893";
hospital_1.location = "Douala";

var hospital_2 = new hospitalManager.hospital();
hospital_2.id = 2;
hospital_2.name = "Eugene Jamot";
hospital_2.contact = "35454545";
hospital_2.location = "Yaounde";



var hospitals = [hospital_1, hospital_2];

//get all hospitals
router.get("/view",(req, res, next)=>{
    res.render('hospital/view_hospital', {
         title:"view hospital",
    hospitalList: hospitals
    })
   
});

//add a hospital
router.post("/", (req,res)=>{
    var newHospital = req.body;
    hospitals.push(newHospital);
    res.render(hospitals,{
        hospitalList: hospitals 
    });
   

});

//update hospital details
router.patch("/:id",(req,res)=>{
    var id = req.params.id-1;
    var updatedInfo = req.body;
    hospitals[id] = updatedInfo;
    res.render(hospitals,{
        hospitalList: hospitals 
    });
    
});


module.exports = router;
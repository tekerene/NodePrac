const express = require("express");

var router = express.Router();

// HOME
router.get("/", (req, res)=>{
  res.render('index')
});
// ABOUT US
router.get('/about',(req, res)=>{
    res.render('about');
})

// PATIENT
// Route view_patient
// router.get('/add-patient', (req,res)=>{
//     res.render('patient/add_patient');
// });

// Route add_patient

// router.get('/add', (req,res)=>{
//     res.render('patient/view_patient');
// });

// HOSPITAL
// Route view_hospital
router.get('/view-hospital', (req,res)=>{
    res.render('hospital/view_hospital');
});

// Route add_hospital
router.get('/add-hospital', (req,res)=>{
    res.render('hospital/add_hospital');
});

module.exports = router;
const express = require('express');
var router = express.Router();
var medicationManager = require('../models/Medication');

var medicine_1 = new medicationManager.medication();
medicine_1.id = 1;
medicine_1.name = 'paracetamol';
medicine_1.desc = 'take fo light headache';

var medicine_2 = new medicationManager.medication();
medicine_2.id = 2;
medicine_2.name = "ibuprofen";
medicine_2.desc = "take for swellen body";
//array of medecines
var medicines = [medicine_1, medicine_2];

//get all registered medicines
router.get('/', (req, res)=>{
 res.send(medicines);
});

router.post('/', (req, res)=>{
    var newMedication = req.body;
    medicines.push(newMedication);
    res.send(medicines);
});
router.patch('/:id', (req, res)=>{
    var id = req.params.id-1;
    var medUpdate = req.body;
    medicines[id] = medUpdate;
    res.send(medicines);
})
module.exports = router;
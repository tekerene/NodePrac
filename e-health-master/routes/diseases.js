const express = require('express');
var router = express.Router();
var diseasesManager = require('../models/Diseases');

var newDiseases = new diseasesManager.disease();

newDiseases.id = 1;
newDiseases.name = 'coronaVirus';
newDiseases.category = "respiratory";

var diseases = [newDiseases];


router.get('/', (req, res)=>{
    res.send(diseases);
});

router.post('/', (req, res)=>{
    var updateDisease = req.body;
    diseases.push(updateDisease);
    res.send(diseases);
});
router.patch('/"id', (req, res)=>{
    var id = req.params.id-1;
    var dis = req.body;
    diseases[id] = dis;
    res.send(diseases);
});
module.exports = router;

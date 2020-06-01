const path = require("path");
const express = require("express");
const patientManager = require("./models/Patient")
const diseaseManager = require("./models/Diseases")
const hospitalManager = require("./models/Hospital");
const medicationManager = require("./models/Medication");
const patientRouter = require("./routes/patient");
const exphbs = require('express-handlebars');
const patientApi = require('./routes/patientApi');
const mainRouter = require("./routes/main");
const hospitalRouter = require("./routes/hospital");
const medicationRouter = require('./routes/medication');
const diseasesRouter = require('./routes/diseases'); 

const PORT = 4050;
var app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

 
//routing middleware 
app.use("/", mainRouter);
app.use("/api/patient", patientApi);
app.use("/patient", patientRouter);
app.use("/hospital", hospitalRouter);
app.use("/medication", medicationRouter);
//app.use('/diseases', diseaseManager);

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set("view engine", "handlebars");

app.get('/', (req, res) =>{
    res.render('index');
});

app.listen(PORT, ()=>{
    console.log(`listening on http://127.0.0.1:${PORT}`)
})




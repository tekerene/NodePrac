var http = require("http");
var url = require("url");
var formidable = require('formidable');
var votersManager = require('./voters');
var fs = require("fs");

var port = 5050;
var hostname = "localhost";

http.createServer( function(req, res){
    var pathredirectTo;
    switch(req.url){
        case "/register":
            pathredirectTo = "./views/register.html";
            if(req.method.toLowerCase() === "post"){
                var form = formidable.IncomingForm();
               // console.log(JSON.stringify(form));
                
                form.parse(req, (err, fields,files)=>{
                    var name = fields.name;
                    var idNumber = fields.id_number;
                    var voter = new votersManager.voter(name, idNumber );
                    if(voter.exists()) {
                        console.log("voter exists already");
                    } else {
                        voter.registerVoter();
                    }
                    console.log(voter);
                });
            }
            break;
        case "/voters":
            pathredirectTo = "./views/voters.html";
            if(req.method.toLowerCase() === 'post'){
                var form = formidable.IncomingForm();
                //console.log(JSON.stringify(form));
                //console.log(form+"submitted successfully");
                form.parse(req, (err, fields, file)=>{
                    var party = fields.opradio;
                    var name = fields.name;
                    var idNumber = fields.id_number;
                    var voterInfo = new votersManager.voter(party, name, idNumber);
                
                    console.log(party + name + idNumber);
                });
            }
            break;
        case "/detail":
            pathredirectTo = "./views/show_detail.html";
            break;
        default:
            pathredirectTo = "./views/index.html";
            break;
    };

    var indexPage = fs.readFile(pathredirectTo, function(error, data){
        if(error){
            console.log(error)
        } else {
            res.writeHead(200, {"Content-Type" : "text/html"});
            res.write(data, (error)=>{
              //  console.log(error);
            });
            
        }
        res.end();
    })
    
    

}).listen(port, hostname,
     console.log("server started at "+ hostname +":"+ port));

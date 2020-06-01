const nodemailer = require('nodemailer');
const http = require('http');

var transporter = nodemailer.createTransport({
    services: 'gmail',
    auth: {
       user: 'tekerene9@gmail.com',
    pass:"653241799"
    }
});

    var mailerOptions = {
        from : 'tekerene9@gmail.com',
        to: 'tekerene99@gmail.com',
        subject: "sending emails with nodejs",
        text: 'that is easy!'
    };
    transporter.sendMail(mailerOptions, function(error, info){
        if(error){
            console.log('count not connect' + error);
        } else {
            console.log('email sent: '+ info.response)
        }
    });
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.end('hello');
// }).listen(2000, (req, res)=>{
//     console.log("server started at port 2000");
// });
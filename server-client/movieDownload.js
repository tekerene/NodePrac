//const socket = require('socket');

// import { Socket } from "dgram";
var net = require('net');

var moviespace = 1220;
var socket = net.createConnection(
    {
        host: "localhost",
        port: '8080'
    });
    // socket.setTimeout(1000);
socket.on("connect", (download)=>{
    if(download >= moviespace){
        console.log("movie is downloaded"+socket.bytesRead);
    }else {
        console.log("movie is downloading");
    }
//console.log("connected")
});
socket.on('data', function(data){
// checkMovieStatus(socket.bytesRead);
console.log("Client 1 running "+ data)
});
socket.on("connect", function() {
    console.log("We are connected to the server");
});
socket.on("error",()=> {
    console.log("Sorry an error occured!!!")
});
socket.on('close', function(err){
    console.log("server close: " + err)

});

// var checkMovieStatus = function(mbdownload) {
//     if(mbdownload >= moviespace){
//         console.log('connected' +socket.localAddress)
//     } else {
//         console.log("our movie is still downloading")
//     }
// }
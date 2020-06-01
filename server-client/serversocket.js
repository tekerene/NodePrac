var net = require('net');

var server = net.createServer();
server.listen(
    {
       host: "localhost",
       port:  8080,
       backlog:2,
       exclusive: true
    });
// socket.setTimeout(1000);
server.getConnections((err, count)=>{
    if(err){
        console.log(err.message)
    } else {
        console.log("the number of connected clients are :"+ count++);
    }
    });
server.on('listening', function(data){
console.log("server connection ready to listen")
});

server.on('connection', function(socket){
    var socket_id =+ 1;
    console.log("client "+ (socket_id)+" is connected")
    socket.write(new Date().toISOString());
});
server.on("error",()=> {
    console.log("Sorry an error occured")
});
server.on("close", (err) =>{
    console.log("connection stopped!!!"+ err)
});


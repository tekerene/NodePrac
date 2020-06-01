var events = require('events');

var fs = require('fs');
var eventEmitter = new events.EventEmitter();

fs.fileName = (err, data) => {
    console.log('user logged in');
    eventEmitter.emit('ok');
}
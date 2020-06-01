const fs = require('fs');
const zlib = require('zlib');

var zib = zlib.createUnzip();
var file = fs.createReadStream('zib.txt.gz');
let unzib  = fs.createWriteStream('unzip.txt');
let result = file.pipe(zib).pipe(unzib);
console.log("unzib successfully");
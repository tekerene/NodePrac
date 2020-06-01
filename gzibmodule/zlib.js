const zlib = require('zlib');
const fs = require('fs');
const zib = zlib.createGzip();
var textfile = fs.createReadStream('example.txt');
var zibfile = fs.createWriteStream('zib.txt.gz');
var result = textfile.pipe(zib).pipe(zibfile);
console.log("zib successfully");

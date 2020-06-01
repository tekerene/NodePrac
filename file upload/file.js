var http = require('http');
var formidable = require('formidable');
const fs = require('fs');


http.createServer(function(req, res){
    if(req.url == "/fileUpload"){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            // var oldPath = files.filetoupload.path;
            // var newPath = "C:/Users/uploads" + files.filetoupload.name;
            // fs.rename(oldPath, newPath, function (err) {
            //     if (err) throw err;
            //     res.write('file uploaded and moved!');
            //     res.end();

            // });
            //console.log(files.name);
            res.end('success');
            
        });
    } else {
    res.writeHead(200, {'Content-Type': 'Text/html'});
    res.write('<form action="/fileUpload" method="post" enctype="multpart/form-data">')  
              res.write('<input type="file" name="filetoupload" placeholder="upload file"> <br>')  
                res.write('<input type="submit" placeholder="submit">');  
               res.write('</form>');
               return res.end();
            }
    
}).listen(3000, (req, res)=>{
    console.log("server started at port 3000");
});
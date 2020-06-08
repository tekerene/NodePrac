 var form = new formidable.IncomingForm();
         form.parse(req, function (err, field, files) {
             res.write('file uploaded');
             res.end();
    });
     form.on('fileBegin', 
     function(name, file){
         file.path = __dirname + '/uploads/' + file.name;
     });
     form.on('file', function(name, file){
         console.log('Uploaded' + file.name);
     });
        // res.sendFile(__dirname + '/index.html');
     });
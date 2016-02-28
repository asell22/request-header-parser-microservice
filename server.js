var express = require('express');
var app = express();

app.get('/', function(req, res) {
    var ipaddress = req.header('x-forwarded-for');
    
    var language = req.header('accept-language');
    language = /^[^,]*/.exec(language)[0];
    
    var software = req.header('user-agent');
    software = software.match(/\((.+?)\)/)[1];
    
    res.send({
        ipaddress: ipaddress,
        language: language,
        software: software
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server running on port", process.env.PORT);
});
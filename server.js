var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log(req.header('x-forwarded-for'));
    console.log(req.header('accept-language'));
    console.log(req.header('user-agent'));
    res.send();
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server running on port", process.env.PORT);
});
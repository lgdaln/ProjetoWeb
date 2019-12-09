var express = require('express'),
http = require('http');

var hostname = 'localhost';

var port = 3000;
var app = express();


app.use(express.static('public'));

var server = http.createServer(app);

server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
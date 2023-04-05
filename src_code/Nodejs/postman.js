'use strict';
var http = require('http');
var express = require('express');
var app = express();
var fs = require("fs");
const tabletojson = require('tabletojson');
var parseMETAR = require('metar');
app.get('/', function (req, res) {
    tabletojson.convertUrl(
        'http://www.amssdelhi.gov.in/Palam4.php',
        function(tablesAsJson) {
            varj =JSON.stringify(tablesAsJson[1]);
            varobjectValue = JSON.parse(j);
            res.write(tablesAsJson);
            console.log(tablesAsJson);
            rl.question('Which AIRPORT ', (answer) => {
                // Log the answer in a database
                console.log(`Here You Go!!`);
                console.log(objectValue[answer]);
                rl.close();
              });
    
   });
})

var server = app.listen(8080, function () 
{
    
var host = server.address().address
var port = server.address().port

console.log("port is http://localhost:8081/", host,port)

//console.log("Example app listening at http://%s:%s", host, port)

  })

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type':'text/html'});

}).listen(3000);
//console.log("http://127.0.0.1:3000/")

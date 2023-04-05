'use strict';
{
const tabletojson = require('tabletojson');
var fs = require('fs');
var parseMETAR = require('metar');
//required for decoding the METAR SIGMET
const readline = require('readline');
var rl = readline.createInterface({
input:process.stdin,
output:process.stdout
  });
//creates an interface which will take input from the user 
tabletojson.convertUrl(
'http://www.amssdelhi.gov.in/Palam4.php',
function(tablesAsJson) {
var j =JSON.stringify(tablesAsJson[1]);
var objectValue = JSON.parse(j);
console.log(tablesAsJson);
//converts the tables from the IMD site to json file 

rl.question('Enter the serial number of the airport, for which you want the metar data ',
         (answer) => {
//Log the answer in a database
console.log(objectValue[answer][2]);
//shows the values of the second row (array format)
console.log(parseMETAR(objectValue[answer][2]));
console.log(require('metar-js').parseMetar(objectValue[answer][2]));
console.log(`Here is the decoded METAR data for the airport required`);


rl.close();
          });

    }
);
}
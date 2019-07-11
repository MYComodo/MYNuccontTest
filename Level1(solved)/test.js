const fs = require('fs');
const mains = require('./main.js');
var textFile = fs.readFileSync('InputData.txt','utf8');

console.log(mains.DataTransform(textFile));

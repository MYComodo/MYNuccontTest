const fs = require('fs');
const transformer = require('./transformer.js');
var textFile = fs.readFileSync('InputData.txt','utf8');

console.log(transformer.DataTransform(textFile));

const http = require('http');
const fs = require('fs');


var textFile = fs.readFileSync('InputData.txt','utf8');


const hostname = '127.0.0.101';
const port = 3000;




const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('HelloWorld');
});

server.listen(port,hostname,()=> {
	
//console.log('Server runs at : https//${hostname}:${port}/');
});

//console.log(textFile)


class DataModel{
	 constructor(classifier,description,speningBalance,debit,credit,finalBalance,paarent){
		 this.classifier = classifier;
		 this.description = description;
		 this.speningBalance = speningBalance;
		 this.debit = debit;
		 this.credit = credit;
		 this.finalBalance = finalBalance;
		 this.paarent = (paarent % 100000 == 0 ? "There is no parent classifier" : classifier);
	 }
}

var outData = new Map();//output array
var data = new DataModel();//Object that carries data

 

var Lines = textFile.match(/[^\r\n]+/g);

for(var i = 0; i< Lines.length; i++){
	
	var words = Lines[i].split("  ");
	
	data = new DataModel(words[0],words[1],words[2],words[3],words[4],words[5],words[0]);
	outData.set(data);
}; 

console.log(outData);


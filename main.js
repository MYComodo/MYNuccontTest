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
	
console.log('Server runs at : https//${hostname}:${port}/');
});

//console.log(textFile)


class DataModel{
	 constructor(description,classifier,speningBalance,debit,credit,finalBalance,paarent){
		 this.description = description;
		 this.classifier = classifier;
		 this.speningBalance = speningBalance;
		 this.debit = debit;
		 this.credit = credit;
		 this.finalBalance = finalBalance;
		 this.paarent = paarent;
	 }
	
}

const outData = new Map();

var textWords = textFile.split('  ');

for(wrd in textWords){
	
}

console.log(textWords);
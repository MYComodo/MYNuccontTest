const fs = require('fs');


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

//This code takes input from text file and sends output a Map . 

	
	 exports.DataTransform = function(txtfile){
	
		var outData = new Map();//output array
		var data = new DataModel();//Object that carries data
		
		
		
		var Lines = txtfile.match(/[^\r\n]+/g);
		
		for(var i = 0; i< Lines.length; i++){
			
			var words = Lines[i].split("  ");
			
			data = new DataModel(words[0],words[1],words[2],words[3],words[4],words[5],words[0]);
			outData.set(data);
		}; 
		return outData;
	}







//console.log(DataTransForm(textFile));


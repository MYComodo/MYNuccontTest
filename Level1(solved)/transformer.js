const fs = require('fs');

//ES6 class 
class DataModel{
	//Constructor that takes data immediatly and set to properties. 
	 constructor(classifier,description,speningBalance,debit,credit,finalBalance,paarent){
		 this.classifier = classifier;
		 this.description = description;
		 this.speningBalance = parseInt(speningBalance);
		 this.debit = parseInt(debit);
		 this.credit = parseInt(credit);
		 this.finalBalance = parseInt(finalBalance);
		 this.paarent = (paarent % 100000 == 0 ? "There is no parent classifier" : classifier);
	 }
}

//This code takes input from text file and sends output a Map . 

	// I tried to export data to another file. Because in real life it is necessary to divide 
	 exports.DataTransform = function(txtfile){
	
		var outData = new Map();//output array
		var data = new DataModel();//Object that carries data
		
		
		
		var Lines = txtfile.match(/[^\r\n]+/g);
		
		for(var i = 0; i< Lines.length; i++){
			
			var words = Lines[i].split("  ");//splits string with 2 spaces. 
			
			//insert array to object.
			data = new DataModel(words[0],words[1],words[2],words[3],words[4],words[5],words[0]);
			//add DataModel object to Map. 
			outData.set(data);
		}; 
		return outData;
	}







//console.log(DataTransForm(textFile));


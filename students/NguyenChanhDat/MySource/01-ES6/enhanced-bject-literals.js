function enhancedObjectLiterals(firstName,lastName) {
	//ES5
	var person1 ={
		firstName: firstName,
		lastName:lastName
	};


	//ES6

	var	person2={firstName,lastName};

	console.log(person1);
	console.log(person2);

}



var clickDemo5 = function(){
	enhancedObjectLiterals('Chanh','Dat');
}
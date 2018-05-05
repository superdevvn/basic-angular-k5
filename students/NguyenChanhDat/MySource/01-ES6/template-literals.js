//ES5

// function introduce(fullName,school,major) {
// 	console.log("Hello "+fullName+". I'm attending at "+school+" My major is "+major);
// }


//ES6

function introduce(fullName,school,major) {
	console.log(`Hello ${fullName}.
I'm attending at ${school}. My major is ${major}`);
}

var clickDemo2=function(){
	introduce('Chanh Dat','PTIT','IT');
}
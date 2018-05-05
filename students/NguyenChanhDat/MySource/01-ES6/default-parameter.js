//ES5
// function link(height, color, url) {
// 	var height = height || 50;
// 	var color = color || 'red';
// 	var url = url || 'superdevvn.com';

// 	console.log(height);
// 	console.log(color);
// 	console.log(url);
// }

//ES6
function studentInfo(fullName='Chanh Dat',age=20,hometown='Hue') {
	console.log(fullName);
	console.log(age);
	console.log(hometown);
}

var clickDemo1=function() {
	studentInfo();
	studentInfo('Cu Chuoi',30,'HCM');
}
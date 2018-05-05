var student={
	fullName:'ChanhDat',
	age: 20,
	number: 10,
	object: 'Math'
}
function destructuringAssignment(student) {
	var {fullName,age,number,object} = student;

	console.log(fullName);
	console.log(age);
	console.log(number);
	console.log(object);
}

var clickDemo4 = function(){
	destructuringAssignment(student);
}
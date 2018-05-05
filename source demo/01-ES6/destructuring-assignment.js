function destructuringAssignment(person){
    //ES5
    //var firstName = person.firstName;
    //var lastName = person.lastName;

    //ES6
    var {firstName,lastName,age} = person;

    console.log(firstName);
    console.log(lastName);
    console.log(age);
}

var clickDemo4 = function(){
    var person = {
        firstName: 'Nghia',
        lastName: 'Tran',
        age: '27'
    };
    destructuringAssignment(person);
}
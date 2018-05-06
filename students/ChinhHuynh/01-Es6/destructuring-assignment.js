function destructingAss(Person){
 //ES6
    var {firstName, lastName, age} = Person;

    console.log(firstName);
    console.log(lastName);
    console.log(age);

}

var clickDemo4 = function(){
    var Person = {
        firstName: 'Chinh',
        lastName: 'Huynh',
        age: '22'
    };
    destructingAss(Person);
}
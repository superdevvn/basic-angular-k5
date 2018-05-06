function multilineString (firstName, lastName, age){
    // ES5
    var massage = 'My name is' + firstName + ' ' + lastName  + 'I am' + age + 'Year old';

    // Es6
    var massage2 = `My Name is ${firstName} ${lastName}
    I am ${age} Year old`;

    console.log(massage);
    console.log(massage2);
}
var clickDemo3 = function (){
    multilineString ('Chinh', 'Huynh', 22);
}

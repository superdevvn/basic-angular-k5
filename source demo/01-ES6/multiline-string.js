function multilineString(firstName, lastName, age) {
    // ES5
    var message1 = 'My name is ' + firstName + ' ' + lastName + '\n'
        + 'I am ' + age + ' years old';

    // ES6
    var message2 = `My name is ${firstName} ${lastName}
I am ${age} years old`;

    console.log(message1);
    console.log(message2);
}

function clickDemo3() {
    multilineString('Nghia', 'Tran', 27);
}
function destructuringAssignment(person) {
    //es5
    //var firstName = person.firstName;
    //var lastName = person.firstName;
    //es6
    var firstName = person.firstName, lastName = person.lastName;
    console.log(firstName);
    console.log(lastName);
}
function click4() {
    var person = { firstName: 'cuong', lastName: 'Nguyen', age: '22' };
    destructuringAssignment(person);
}

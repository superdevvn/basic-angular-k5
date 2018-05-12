var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
function hello(person) {
    person = person || {
        firstName: 'Nghia',
        lastName: 'Tran'
    };
    console.log("Hello " + person.firstName + " " + person.lastName);
}
function clickDemo1() {
    var person = new Person();
    person.firstName = 'Peter';
    person.lastName = 'Dark';
    hello();
    hello(person);
}

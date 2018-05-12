var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
function hello(person) {
    person = person || {
        firstname: 'nguyen',
        lastName: 'Cuong'
    };
    console.log("hello " + person.firstname + " " + person.lastName);
}
function clickDemo() {
    var person = new Person();
    person.firstname = 'cuong';
    person.lastName = 'nguyen';
    hello();
    hello(person);
}

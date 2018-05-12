class Person{
    firstName: string;
    lastName: string;
}
function hello(person?: Person){
    person = person || {
        firstName: 'Nghia',
        lastName: 'Tran'
    }
    console.log(`Hello ${person.firstName} ${person.lastName}`);
}

function clickDemo1(){
    var person = new Person();
    person.firstName = 'Peter';
    person.lastName = 'Dark';
    hello();
    hello(person);
}
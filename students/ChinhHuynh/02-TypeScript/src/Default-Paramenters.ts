class Person{
    firstName: string;
    lastName: string;
}
function hello(person?: Person){
    person = person ||{
        firstName: 'Chinh',
        lastName: 'Huynh'
    }
    console.log(`hello ${person.firstName} ${person.lastName}`)
}

function clickDemo1(){
    var person = new Person;
        person.firstName = 'a';
        person.lastName = 'b';
    hello();
    hello(person);
}
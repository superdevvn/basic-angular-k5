class Person {
    firstname:string;
    lastname:string;
}
function hello (person? : Person){
    person =person || {
        firstname: 'nghia',
        lastname :'tran'
    }
    console.log(`Hello ${person.firstname} ${person.lastname}`);
}
function clickDemo1(){
    var person =new Person();
    person.firstname ='peter';
    person.lastname ='dark';
    hello();
    hello(person);
}
class Person{
    CMND : string;
    name : string;
    age : number;
    constructor (CMND : string, name : string,age : number){
            this.CMND = CMND;
            this.name = name;
            this.age = age;
        }
}
function hi(Person){
    console.log(`toi ten la ${Person.name} CMND ${Person.CMND} tuoi ${Person.age}`);

}
function clickDemoBTVN(){
    var person = new Person("123", 'cuong',5);
    hi(person);
}
import {Person } from './../src/interface/Person';
import {Student} from './../src/model/Student';

function greeter(person : Person){
    return "hello, " + person.firstName + " " +person.lastName;
}
let student: Student = new Student("Nguyen Tan Cuong","Nguyen", "Tan", "Cuong"); 
document.body.innerHTML = greeter(student);
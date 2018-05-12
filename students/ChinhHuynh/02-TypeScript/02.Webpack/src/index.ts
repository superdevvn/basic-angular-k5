import { Person } from "./interfaces/person";
import { Student } from "./models/student";

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let student:Student = new Student("Chinh", "Ngoc", "Huynh");

document.body.innerHTML = greeter(student);
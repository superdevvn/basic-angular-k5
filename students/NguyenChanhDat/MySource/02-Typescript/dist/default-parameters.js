class Student {
}
function hello(student) {
    student = student || {
        firstName: 'Chanh',
        lastName: 'Dat',
        age: 20
    };
    console.log(`Hello My name ${student.firstName} ${student.lastName}
I am ${student.age} years old. `);
}
function clickDemo1() {
    var student = new Student();
    student.firstName = 'Kids';
    student.lastName = 'Ben';
    student.age = 25;
    hello();
    hello(student);
}

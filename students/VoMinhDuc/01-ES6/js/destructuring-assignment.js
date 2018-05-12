var student = {
    fullname: 'Vo Minh Duc',
    hometown: 'Da Nang',
    age: 20,
    school: 'PTIT',
    major: 'information technology'
}

function DestructuringAssignment(student){
    var {fullname, hometown, age, school, major} = student;
    console.log(fullname+'\n'+hometown+'\n'+age+'\n'+school+'\n'+major);
}

var Click4 = function(){
    DestructuringAssignment(student);
}
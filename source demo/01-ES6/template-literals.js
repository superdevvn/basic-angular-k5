function hello(firstName, lastName) {
    //ES5
    console.log("Hello " + firstName + " " + lastName);
    //ES6
    console.log(`Hello ${firstName} ${lastName}`);
}

var clickDemoTemplateLiterals = function (){
    hello('Nghia','Tran');
}
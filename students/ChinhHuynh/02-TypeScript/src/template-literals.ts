function name1(firstName, lastName){
    // ES5
    console.log("Minh Ten La: " + firstName + " " + lastName);
    // ES6
    console.log(`Minh Ten La: ${firstName} ${lastName}`);
}
var clickDemo2 = function (){
    name1('Chinh', 'Huynh');
    name1('nam', 'a');
}
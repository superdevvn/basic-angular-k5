function name(firstName, lastName){
    // ES5
    console.log("Minh Ten La: " + firstName + " " + lastName);
    // ES6
    console.log(`Minh Ten La: ${firstName} ${lastName}`);
}
var clickDemo2 = function (){
    name('Chinh', 'Huynh');
}
function multiLineString(name){
    //es5 xuong hang '\n'
    var massage = 'my name is \n' + name;
    //es6 
    var massage2 = `my name is 
${name}`;

    console.log(massage);
    console.log(massage2);

}
function clickMultilineString(){
    multiLineString('cuong');
}
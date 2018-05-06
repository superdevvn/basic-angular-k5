function link(height, color, url){
    var height = height || 50;
    var color = color || 'red';
    var url = url || 'sp.vn';

    console.log(height);
    console.log(color);
    console.log(url);
}

var clickDemo1 = function (){
    link();
    link(35,'yellow','fb.com');
}
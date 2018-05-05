function link(height, color, url){
    var height = height || 50;
    var color = color || 'red';
    var url = url || 'superdevvn.com';

    console.log(height);
    console.log(color);
    console.log(url);
}

function link2(height = 50, color = 'red', url = 'superdevvn.com'){
    console.log(height);
    console.log(color);
    console.log(url);
}

var clickDemo1 = function (){
    link2();
    link2(100);
    link2(100,'blue');
}
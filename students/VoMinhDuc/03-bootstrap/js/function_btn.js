let image1 = document.getElementById('img1');
let tmp1 = image1.src;
let image2 = document.getElementById('img2');
let tmp2 = image2.src;

function BtnClick1(){
    if (image1.src == tmp1) {
        image1.src = "img/SOK.jpg";
    } else {
        image1.src = "img/acm.jpeg";
    }
    $('#btn2').off('click');
    $('#btn2').click(function () {
        alert('Clicked 2 success!');
        if (image2.src == tmp2) {
            document.getElementById('img2').src = "img/goodmorning.jpg";
        } else {
            document.getElementById('img2').src = "img/acm.jpeg";
        }
    });
}

function BtnClick3(){
    $('#notify').html('<div id="notify" class="alert alert-success" style="margin-top: 10px;">Turn On Notify! <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
}

function BtnClick4(){
    $('#btn4').off('click');
    $('#img3').toggle(5000);
}

$('#btn3').mouseenter(function(){
    let text = 'Turn On';
    $('#btn3').text(text);
});
$('#btn3').mouseleave(function(){
    $('#btn3').text('Submit');
});

$('#node3a').mouseenter(function(){
    $('#node3a').html('<img class="card-img-top" src="img/cpp_logo.png" height="220px" alt="ACM ICPC 2018">');
});
$('#node3a').mouseleave(function(){
    $('#node3a').html('<img class="card-img-top" src="img/captain_chibi.jpg" height="220px" alt="ACM ICPC 2018">');
});

$('#btn4').tooltip();
$('.alert').alert();
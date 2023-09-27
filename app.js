var $ = function $(el){
    return document.querySelector(el)
}
var cube = { x: 0, y: 0, z: 0 };
var box = $('.box')
var $rangeX = $('#rx'),$rangeY = $('#ry'),$rangeZ = $('#rz'),
    $textX  = $('#tx'),$textY  = $('#ty'),$textZ  = $('#tz');
function changedeg(pos, val){
    cube[pos] = val;
    var deg = 'rotateX(' + cube.x + 'deg) rotateY(' + cube.y + 'deg) rotateZ(' + cube.z + 'deg)';
    console.log(deg)
    box.style.webkitTransform = deg;
    box.style.mozTransform = deg;
    box.style.msTransform = deg;
    box.style.oTransform = deg;
    box.style.transform = deg;
}
function changeInputVal(el, val){
    el.value = val
}

$rangeX.oninput = function(){
    changeInputVal($textX, this.value)
    changedeg('x', this.value)
}
$rangeY.oninput = function(){
    changeInputVal($textY, this.value)
    changedeg('y', this.value)
}
$rangeZ.oninput = function(){
    changeInputVal($textZ, this.value)
    changedeg('z', this.value)
}
$textX.oninput = function(){
    changeInputVal($rangeX, this.value)
    changedeg('x', this.value)
}
$textY.oninput = function(){
    changeInputVal($rangeY, this.value)
    changedeg('y', this.value)
}
$textZ.oninput = function(){
    changeInputVal($rangeZ, this.value)
    changedeg('z', this.value)
}

var a = $('.a')
var b = $('.b')
var c = $('.c')
var d = $('.d')
var e = $('.e')
var f = $('.f')

function aFunc(letter, t) {
    if (t === true) {
        letter.style.backgroundColor = "green";
    } else {
        letter.style.backgroundColor = "black";
    }

}

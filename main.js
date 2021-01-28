var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(300, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    circle(mouse_x, mouse_y);
    console.log(mouse_x,mouse_y);
}

function circle(){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke(); 
}
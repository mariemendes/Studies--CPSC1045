let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let x = 300;
let y = 200;

let button1 = document.getElementById('button1');
button1.addEventListener('click', drawSmileFace);

let button2 = document.getElementById('button2');
button2.addEventListener('click', drawNeutralFace);

let button3 = document.getElementById('button3');
button3.addEventListener('click', drawFrowningFace);

let button4 = document.getElementById('button4');
button4.addEventListener('click', drawSmileUp);

let button5 = document.getElementById('button5');
button5.addEventListener('click', drawSmileDown);

function drawCircle() {
    ctx.beginPath();
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'black';
    ctx.fill();
    ctx.stroke();
}

function drawEyes () {
    ctx.beginPath();
    ctx.arc(x,y,4,0,2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
}

function drawSmile() {
    ctx.beginPath();
    ctx.arc(x, y+150, 90/4, 3, 2*Math.PI, true);
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function drawNeutral() {
    ctx.beginPath();
    ctx.moveTo(x-30, y+10);
    ctx.lineTo(x+30, y+10)
    ctx.stroke();
}

function drawFrawning() {
    ctx.beginPath();
    ctx.arc(x, y+150, 90/4, 0, 1*Math.PI, true);
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function drawSmileFace() {
    ctx.clearRect(0, 0, 600, 400);
    ctx.beginPath();
    drawCircle();

    ctx.beginPath();
    ctx.translate(x-316,y-215);
    drawEyes();

    ctx.beginPath();
    ctx.translate(30,0);
    drawEyes();

    ctx.beginPath();
    ctx.translate(-14,-130);
    drawSmile();
}
function drawNeutralFace() {
    ctx.beginPath();
    ctx.clearRect(0, 0, 600, 400);
    ctx.translate(0,145); 
    drawCircle();

    ctx.beginPath();
    ctx.translate(x-316,y-215);
    drawEyes();

    ctx.translate(30,0);
    drawEyes();

    ctx.beginPath();
    ctx.translate(-14,20);
    drawNeutral();
}
function drawFrowningFace() {
    ctx.clearRect(0, 0, 600, 400);
    ctx.translate(0,0); 
    drawCircle();

    ctx.beginPath();
    ctx.translate(x-316,y-215);
    drawEyes();

    ctx.translate(30,0);
    drawEyes();

    ctx.beginPath();
    ctx.translate(-14,-110);
    drawFrawning()
}
function drawSmileUp() {
    ctx.clearRect(0, 0, 600, 400);
    ctx.translate(0,0); 
    drawSmileFace()
}

function drawSmileDown() {
    ctx.clearRect(0, 0, 600, 400);
    ctx.translate(x-300,y+200); 
    drawSmileFace()
}
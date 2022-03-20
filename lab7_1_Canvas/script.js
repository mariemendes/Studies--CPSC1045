// wheels
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let drawWheel = function() {
    ctx.beginPath();
    ctx.arc(50,50,40,0,2*Math.PI);
    ctx.lineTo(10,50);
    
    ctx.moveTo(50,10);
    ctx.lineTo(50,90);
    
    ctx.moveTo(22,22);
    ctx.lineTo(78,78);

    ctx.moveTo(22,78);
    ctx.lineTo(78,22);

    ctx.stroke();
}
drawWheel();

// car

let drawCar = function() {
    ctx.beginPath();
    ctx.moveTo(300,10);
    ctx.lineTo(400,10);

    ctx.moveTo(300,10);
    ctx.lineTo(250,50);

    ctx.moveTo(400,10);
    ctx.lineTo(450,50);

    ctx.moveTo(450,50);
    ctx.lineTo(520,50);

    ctx.moveTo(250,50);
    ctx.lineTo(180,50);

    ctx.moveTo(180,110);
    ctx.lineTo(180,50);

    ctx.moveTo(520,50);
    ctx.lineTo(520,110);

    ctx.moveTo(180,110);
    ctx.lineTo(230,110);

    ctx.moveTo(520,110);
    ctx.lineTo(470,110);

    ctx.moveTo(300,110);
    ctx.lineTo(400,110);

    ctx.stroke();

    let drawWheelCars = function() {  
        ctx.beginPath();
        ctx.translate(222,67);
        ctx.scale(.86, .86)
        drawWheel();
    
        ctx.beginPath();
        ctx.translate(197,0);
        drawWheel();
    }
    drawWheelCars();
}
drawCar();

// hexagon
let drawHexagon = function() {
    ctx.beginPath();
    ctx.translate(-410,100);
    ctx.moveTo(10,0);
    ctx.lineTo(-30,50);
    ctx.lineTo(10,100);
    ctx.lineTo(70,100);
    ctx.lineTo(110,50);
    ctx.lineTo(70,0);
    ctx.lineTo(10, 0);
    ctx.stroke();
}
drawHexagon();

// four-point

let drawFourStar = function() {
    ctx.beginPath(); 
    ctx.translate(120,0);
    ctx.moveTo(60, 0);
    ctx.lineTo(70, 40);
    ctx.lineTo(115, 48);
    ctx.lineTo(70, 60);
    ctx.lineTo(60, 100);
    ctx.lineTo(50, 60);
    ctx.lineTo(5, 50);
    ctx.lineTo(50, 40);
    ctx.lineTo(60, 0);
    ctx.stroke();
}
drawFourStar();

// star

let drawStar = function() {
    ctx.beginPath(); 
    ctx.translate(120,0);
    ctx.moveTo(54, 0);
    ctx.lineTo(70.5, 35);
    ctx.lineTo(109, 39.15);
    ctx.lineTo(81, 65.5);
    ctx.lineTo(87.5, 102.5);
    ctx.lineTo(54, 85);
    ctx.lineTo(20.6, 102.5);
    ctx.lineTo(27.5, 65.5);
    ctx.lineTo(.5, 39);
    ctx.lineTo(37.5, 34);
    ctx.lineTo(54, 0);
    ctx.stroke();
}
drawStar();

//Square
function drawSquare() {
    ctx.beginPath(); 
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'blue';
    ctx.rect(170, 5, 100, 100);
    ctx.fill();
    ctx.stroke();
}
let button1 = document.getElementById('button1');
button1.addEventListener('click', drawSquare);

//text

function drawTxt() {
    ctx.beginPath(); 
    ctx.translate(-290,130);
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'blue';
    ctx.font = '50px Arial';
    ctx.fillText("Shapes are drawn!",10,50);
    ctx.strokeText("Shapes are drawn!",10,50);

    ctx.fill();
    ctx.stroke();
}
let button2 = document.getElementById('button2');
button2.addEventListener('click', drawTxt);

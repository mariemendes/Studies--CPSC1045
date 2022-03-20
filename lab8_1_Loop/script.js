let button1 = document.getElementById('button1').addEventListener('click', checkNumDots);
let button2 = document.getElementById('button2').addEventListener('click', checkNumStars);
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 400;
let y = 200;

function checkNumDots(e) {
    let checkNumber = document.getElementById('box1').value;
    if (isNaN(checkNumber)){
        alert('Your input is not a number.');
    } else if(checkNumber <= 0 || checkNumber >= 101) {
        alert('It is not a number in the given range.');
    } else {
        drawDots()
    }
}
function checkNumStars(e) {
    let checkNumber = document.getElementById('box1').value;

    if (isNaN(checkNumber)){
        alert('Your input is not a number.');
    } else if(checkNumber <= 0 || checkNumber >= 101) {
        alert('It is not a number in the given range.');
    } else {
        drawStars()
    }
}

function drawDots() {
    ctx.clearRect(0, 0, 800, 400);
    let checkNumber = document.getElementById('box1').value;

    var input_number = checkNumber;
    for(i = 0; i < input_number; i++){    
        var radius = Math.floor(Math.random() * (50 - 5 + 1)) + 5;
        var x2 = Math.floor(Math.random() * (800 - 1 + 1)) + 1;
        var y2 = Math.floor(Math.random() * (400 - 1 + 1)) + 1; 
        ctx.beginPath();
        ctx.arc(x2, y2, radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fillStyle = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        ctx.fill();
    }
}

function drawStars() {
    ctx.clearRect(0, 0, 800, 400);
    let checkNumber = document.getElementById('box1').value;

    var input_number = checkNumber;
    for(i = 0; i < input_number; i++){    
        drawStar()
    }

}

function drawStar() {
    let cx = Math.floor(Math.random() * (800 - 1 + 1)) + 1;
    let cy = Math.floor(Math.random() * (400 - 1 + 1)) + 1; 
    let outerRadius = Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    let innerRadius = outerRadius/4;
    let numPoints = 4;
    let lineWidth = 4;
    let fill = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    let rotate = 0;
    
    ctx.lineWidth = lineWidth;

    ctx.beginPath();
    let draw = (radius,angle,action) => { 
        let x = cx + radius*Math.cos(angle);
        let y = cy + radius*Math.sin(angle);
        ctx[action](x,y);
    };

    draw(outerRadius,rotate,'moveTo');
          
    let angle = 2*Math.PI / numPoints;
    
    for (var i = 0; i <= numPoints; i++) {
      
       let outerAngle = i * angle + rotate;
       let innerAngle = outerAngle + angle/2;
      
       draw(outerRadius,outerAngle,'lineTo');
       draw(innerRadius,innerAngle,'lineTo'); 
    }
    ctx.fillStyle = fill;
    ctx.fill();
}

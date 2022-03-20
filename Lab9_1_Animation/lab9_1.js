let button1 = document.getElementById('button1').addEventListener('click', startGame);
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
const initialX = 300;
const initialY = 300;
let x = initialX;
let y = initialY;
let moveDistance = 5;
let timerID;

canvas.addEventListener('click',startGame)
canvas.addEventListener('click',clickDot)


function startGame() {
    clearInterval(timerID);
    xaxis = 30 * (Math.random() - 0.5); 
    yaxis = 30 * (Math.random() - 0.5); 

    timerID = setInterval(moveDot, 100)
}

function moveDot() {
    ctx.clearRect(0,0,600,600);
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.fill();
    x += xaxis;
    y += yaxis;
    ctx.restore();

    if(x < -40 || x > 640 || y < -40 || y > 640) {
		alert("Oops! The dot has escaped!");
        clearInterval(timerID);
        ctx.clearRect(0,0,600,600);
        x = initialX;
        y = initialY;
    }
}

function clickDot(e) {
    clickX = e.offsetX, clickY = e.offsetY;

    if (Math.sqrt((clickX - x)**2 + (clickY - y))<= 20) {
        alert("Bingo! The dot is caught and will disapear.");
        clearInterval(timerID);
        ctx.clearRect(0,0,600,600);
        x = initialX;
        y = initialY;
    }

}
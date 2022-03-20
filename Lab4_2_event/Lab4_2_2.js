
//Mariane Mendes
// 100385152
let button1 = document.getElementById('button1');
button1.addEventListener('click', sumNumbers);

let button2 = document.getElementById('button2');
button2.addEventListener('click', decreaseNumbers);

let button3 = document.getElementById('button3');
button3.addEventListener('click', multiplyNumbers);

let button4 = document.getElementById('button4');
button4.addEventListener('click', divideNumbers);

let button5 = document.getElementById('button5');
button5.addEventListener('click', expoNumbers);

function sumNumbers(e) {
    let a = Number(document.getElementById('box1').value);
    let b = Number(document.getElementById('box2').value);
    let result = a+b;
    document.getElementById('box3').value = result;
}
function decreaseNumbers(e) {
    let a = Number(document.getElementById('box1').value);
    let b = Number(document.getElementById('box2').value);
    let result = a-b;
    document.getElementById('box3').value = result;
}
function multiplyNumbers(e) {
    let a = Number(document.getElementById('box1').value);
    let b = Number(document.getElementById('box2').value);
    let result = a*b;
    document.getElementById('box3').value = result;
}
function divideNumbers(e) {
    let a = Number(document.getElementById('box1').value);
    let b = Number(document.getElementById('box2').value);
    let result = a/b;
    document.getElementById('box3').value = result;
}
function expoNumbers(e) {
    let a = Number(document.getElementById('box1').value);
    let b = Number(document.getElementById('box2').value);
    let result = a**b;
    document.getElementById('box3').value = result;
}
//Mariane Mendes
// 100385152
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');

div1.addEventListener('click', changeColourBlue);
div2.addEventListener('click', changeColourBlue);
div3.addEventListener('click', changeColourBlue);
div4.addEventListener('click', changeColourBlue);

div1.addEventListener('mouseover', mouseOnColourGreen);
div2.addEventListener('mouseover', mouseOnColourGreen);
div3.addEventListener('mouseover', mouseOnColourGreen);
div4.addEventListener('mouseover', mouseOnColourGreen);

div1.addEventListener('mouseout', mouseOut);
div2.addEventListener('mouseout', mouseOut);
div3.addEventListener('mouseout', mouseOut);
div4.addEventListener('mouseout', mouseOut);

function changeColourBlue(e) {
    let colourBlue = 'blue';
    e.target.style.backgroundColor = colourBlue;
}

function mouseOnColourGreen(e) {
    let colourGreen = 'green';
    e.target.style.backgroundColor = colourGreen;
}

function mouseOut(e){
    let colourWhite = 'white';
    e.target.style.backgroundColor = colourWhite;
}

//Solve the problem step by step.
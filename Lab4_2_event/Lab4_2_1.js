//Mariane Mendes
// 100385152
let button1 = document.getElementById('button1');
button1.addEventListener('click', upperCase);

let button2 = document.getElementById('button2');
button2.addEventListener('click', lowerCase);

let button3 = document.getElementById('button3');
button3.addEventListener('click', lastCharacter);

let button4 = document.getElementById('button4');
button4.addEventListener('click', removeSpace);

function upperCase(e) {
    let text = document.getElementById('box1').value;
    let upperCaseText = text.toUpperCase();
    document.getElementById('box2').value = upperCaseText;
}
function lowerCase(e) {
    let text = document.getElementById('box1').value;
    let lowerCaseText = text.toLowerCase();
    document.getElementById('box2').value = lowerCaseText;
}

function lastCharacter(e) {
    let text = document.getElementById('box1').value;
    let lastCharacter = text.slice(-1);
    document.getElementById('box2').value = lastCharacter;
}

function removeSpace(e) {
    let text = document.getElementById('box1').value;
    let removeSpaces = text.replace(/\s/g, '');
    document.getElementById('box2').value = removeSpaces;
}

// Register events by adding event listeners and make functions to handle the events here
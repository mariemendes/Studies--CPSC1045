let button = document.getElementById('button1');
button.addEventListener('click', checkNum);

function checkNum() {
    let checkNumber = document.getElementById('box1').value;
    let checkPositive = Math.sign(checkNumber);

    if (isNaN(checkNumber) || checkPositive === -1){
        alert('Your input is not valid.')
    } 
    else {
        document.getElementById('box3').value = checkNumber;
    }
}

let button2 = document.getElementById('button2');
button2.addEventListener('click', playGame);

function playGame() {
    let gameNumber = document.getElementById('box2').value;
    let checkPositiveGame = Math.sign(gameNumber);
    let box3 = document.getElementById('box3').value;

    let randomNumber = Math.random() * 100;
    let shot1 = 40;
    let shot2 = 60;
    let p1 = document.getElementById('p1');

    let youLose = box3 - gameNumber;

    if (isNaN(gameNumber) || checkPositiveGame === -1) {
        alert('Your input is not valid.')
    } else if (box3 < checkPositiveGame) {
        alert('The number cannot be greater than the credits!')
    } else {
        if (randomNumber > shot2){
            document.getElementById('box3').value = youLose;
            p1.innerHTML = 'You Lose!'
        } else if (randomNumber < shot1) {
            p1.innerHTML = 'You Win!'
        }
    }
}

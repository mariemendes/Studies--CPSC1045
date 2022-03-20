//Mariane Mendes -- 100385152


// get input box1 and assign to bx1
// get button button1 and assign to bn1
// get paragraph p1 and assign to p1
// add event listener to bn1 with 'click' event and checkNum function as handler function


let button = document.getElementById('button1');
button.addEventListener('click', checkNum);

function checkNum(e) {
    let checkNumber = document.getElementById('box1').value;
    let checkNumifFunction = checkNumIf();
    let switchFunction = checkNumSwitch();

    let p1 = document.getElementById('p1');

    if (isNaN(checkNumber)){
        p1.innerHTML = 'Your input is not a number.'
    } else {
        switchFunction
    }
}

function checkNumIf() {
    let checkNumber = document.getElementById('box1').value;
    let p1 = document.getElementById('p1');

    if (checkNumber >= 1 && checkNumber <= 5) {
        if(checkNumber % 2 === 0) {
        p1.innerHTML = 'It is an even number.' 
        } else {
            p1.innerHTML = 'It is an odd number.'
        }
    } else {
        p1.innerHTML = 'It is not a number in the given range.'
    }
}

function checkNumSwitch() {
    let checkNumber = document.getElementById('box1').value;
    let p1 = document.getElementById('p1');

    switch (checkNumber >= 1 && checkNumber <= 5){
        case (checkNumber % 2 === 0) :
            p1.innerHTML = 'It is an even number.'
            break;
        case (checkNumber % 2 === 1) :
            p1.innerHTML = 'It is an odd number.'
            break;
        default: 
            p1.innerHTML = 'It is not a number in the given range.'
    }
}
/*
use if...else and isNaN() function to check whether the input is a number
if it is number call checkNumif() or checkNumSwitch() function
if it is not a number, show the 'Your input is not a number.' as the content of the p1
*/


//define checkNumIf() function
/*
use if...else if...else to verify whether the number is in the range, whether it is even or odd. Hint: oddNumber % 2 = 1
*/


//define checkNumSwitch() function
/*
use switch to show whether the number in the required range is even or odd 
otherwise use p1.innerHTML to show 'It is not a number in the given range.'
*/







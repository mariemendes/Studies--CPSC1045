let balance = prompt('How much do you want to add?');
let balanceNumber = parseInt(balance)
let checkPositiveGame = Math.sign(balance);

function inputValue() {
    if (isNaN(balanceNumber)){
        alert('Your input is not a number.');
    } else if (checkPositiveGame === -1){
        alert('Your input is a positive number.')
    } else {
        alert('Your current balance is '+ balanceNumber + '. Go ahead');

        while (balanceNumber > 0) {
            let inputValue = prompt('Your current balance is '+ balanceNumber + '. You can type "exit" to quit. To continue playing, enter a number less than or equal to your balance');
            let valueNumber = parseInt(inputValue);
            
            if (inputValue === 'exit'){
                break;
            } else {
                if (valueNumber > balanceNumber){
                    alert('Your number needs to be less than or equal to your balance.')
                    continue;
                }

                let randomNumber = Math.random() * 100;
                let shotLose = 30;

                if (randomNumber >= shotLose){
                    balanceNumber -= valueNumber;
                    if( balanceNumber <= 0) {
                        alert('You lose. Your current balance is ' + balanceNumber + '. You are done for the game')
                    } else {
                        alert('You lose. Your current balance is ' + balanceNumber + '. Take time to decide whether to continue playing')
                    }
                } else {
                    balanceNumber += valueNumber;
                    alert('You win! Your current balance is ' + balanceNumber + '.Take time to decide wheter to continue playing.')
                }
            }
        }             
        alert('Bye Bye.');
    }
}
inputValue() 







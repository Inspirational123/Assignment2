
let guessAns = Math.trunc((Math.random() * 100) + 1);
let score = 10;
let highscore = 0;



let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};



document.querySelector('.submit').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('Please enter a number!');
    }

    else if (guess === guessAns) {
        displayMessage('Correct!');
        document.querySelector('.num').textContent = guessAns;
        document.querySelector('body').style.backgroundColor = '#8ede76';
        document.querySelector('.num').style.width = '30rem';


    if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;

        }

      }
    else if (guess !== guessAns) {
        if (score > 1) {
            displayMessage(guess > guessAns ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.background = 'red';

            document.querySelector('.guesses').textContent += guess + " ";


        } else {
              displayMessage('Too many attempts!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.background = 'darkorange';

        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    guessAns = Math.trunc(Math.random() * 100) + 1;
    displayMessage('lets start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.num').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('.num').style.width = '15rem';
});

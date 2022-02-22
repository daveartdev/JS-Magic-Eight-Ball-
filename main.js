//Let user enter their name if wanted; set an empty variable string= falsy
let isUserName = 'Cailin';

//Ternary
isUserName ?
  console.log(`Hello, ${isUserName}!`):
  console.log('Hello');


//Constant- The user's question
const userQuestion = 'Am i rich?';
console.log(`${isUserName} asked ${userQuestion}`);

//Random number generator of whole numbers between 0(inclusive) and 7(exclusive)
const randomNumber = Math.floor(Math.random() * 8);

// Variable- Eightball 
let eightBall = '';

// Switch
switch (randomNumber) {
  case 0:
    eightBall=('It is certain');
    break;
  case 1:
    eightBall=('It is decidedly so');
    break;
  case 2:
    eightBall=('Reply hazy try again');
    break;
  case 3:
    eightBall=('Cannot predict now');
    break;
  case 4:
    eightBall=('Do not count on it');
    break;
  case 5:
    eightBall=('My sources say no');
    break;
  case 6:
    eightBall=('Outlook not so good');
    break;
  case 7:
    eightBall=('Signs point to yes');
    break;
}

//Output
console.log(`${eightBall}`);
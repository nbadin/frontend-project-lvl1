/* eslint-disable no-unused-vars */
import {getRandomNum} from '../src/getRandomNumber.js';
import readline from 'readline-sync';

// eslint-disable-next-line one-var
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(rules);

for (let round = 1; round <= 3; round += 1) {
    const num = getRandomNum();
    console.log(`Question: ${num}`);
    const readline = require('readline-sync');
    let userAnswer = readline.question('Your answer: ');

    if ((num % 2 === 0 && userAnswer === 'yes') || (num % 2 !== 0 && userAnswer === 'no')) {
        console.log('Correct!');
    } else {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
    }
    
}

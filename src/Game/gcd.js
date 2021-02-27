import {getRandomNum} from '../getRandomNumber.js';
import readline from 'readline-sync';

const maxNum = 99;
const minNum = 1;

const gcd = (firstnum, secondNum) => {
    let divider = secondNum;
    while(divider > 0) {
        if (firstnum % divider === 0 && secondNum % divider === 0) {
            return divider;
        }
        divider -= 1;
    }
}

export const gcdGame = (userName) => {
    const rules = 'Find the greatest common divisor of given numbers.';
    console.log(rules);
    for (let i = 0; i < 3; i += 1){
        const firstNum = getRandomNum(maxNum, minNum);
        const secondNum = getRandomNum(maxNum, minNum);
        const correctAnswer = gcd(firstNum, secondNum);
        console.log(`Question: ${firstNum} ${secondNum}`);
        const userAnswer = readline.question('Your answer: ');
        if (userAnswer === String(correctAnswer)) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            break;
        }
        console.log(`Congratulations, ${userName}!`);
    }   

}
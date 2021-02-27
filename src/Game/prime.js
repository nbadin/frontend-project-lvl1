import {getRandomNum} from '../getRandomNumber.js'
import readline from 'readline-sync';

const isPrime = (num) => {
    if (num <= 1) {
        return 'no';
    }

    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            return 'no';
        }
    }
    return 'yes';
}

const maxNum = 101;
const minNum = 2;

export function primeGame(userName) {
    const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    console.log(rules);
    for (let i = 1; i <= 3; i += 1) {
        const number = getRandomNum(maxNum, minNum);
        const correctAnswer = isPrime(number);
        console.log(`Question: ${number}`);
        const userAnswer = readline.question('Your answer: ');

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            break;
        }
        console.log(`Congratulations, ${userName}!`);

    }
}


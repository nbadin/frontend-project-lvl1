/* eslint-disable max-statements */
import {getRandomNum} from '../src/getRandomNumber.js';;
import readline from 'readline-sync';

const isEven = (num) => {
    let answer = ''
    if (num % 2 === 0) {
        answer = 'yes';
    } else {
        answer = 'no';
    }

    return answer;
}


export function evenGame(userName) {
    const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
    console.log(rules);
    for (let i = 1; i <= 3; i += 1) {
        const number = getRandomNum(),
            correctAnswer = isEven(number);
        console.log(`Question: ${number}`);
        const userAnswer = readline.question('Your answer: ');

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            // eslint-disable-next-line no-unused-expressions
            break;
        }
        console.log(`Congratulations, ${userName}!`);
    }
}
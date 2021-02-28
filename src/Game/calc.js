/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readline from 'readline-sync';
import { getRandomNum } from '../getRandomNumber.js';

const mathOperations = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return null;
  }
};
const maxNum = 30;
const minNum = 1;

// eslint-disable-next-line import/prefer-default-export
export function calcGame(userName) {
  const operations = ['+', '-', '*'];
  const rules = 'What is the result of the expression?';
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomNum(maxNum, minNum);
    const secondNum = getRandomNum(maxNum, minNum);
    const correctAnswer = mathOperations(firstNum, secondNum, operations[i]);
    console.log(`Question: ${firstNum} ${operations[i]} ${secondNum}`);
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

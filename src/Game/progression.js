/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import readline from 'readline-sync';
import { getRandomNum } from '../getRandomNumber.js';

const getRandomProgression = () => {
  const progressionSize = getRandomNum(15, 5);
  const firstNumber = getRandomNum(10, 0);
  const step = getRandomNum(10, 1);
  const result = [];
  for (let i = 0; i < progressionSize; i += 1) {
    result.push(firstNumber + (step * i));
  }
  return result;
};

export function progressionGame(userName) {
  const rules = 'What number is missing in the progression?';
  console.log(rules);
  for (let i = 1; i <= 3; i += 1) {
    const randomProgression = getRandomProgression();
    const randomNumOfProgression = getRandomNum(0, randomProgression.length - 1);
    const missingItem = randomProgression[randomNumOfProgression];
    const correctAnswer = missingItem;
    randomProgression[randomNumOfProgression] = '..';
    const strRandomProgression = randomProgression.join(' ');
    console.log(`Question: ${strRandomProgression}`);
    const userAnswer = readline.question('Your answer: ');
    if (userAnswer === String(correctAnswer)) {
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

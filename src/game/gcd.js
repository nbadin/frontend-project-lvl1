import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

const gcd = (firstNumber, secondNumber) => {
  let divider = secondNumber;
  while (divider > 0) {
    if (firstNumber % divider === 0 && secondNumber % divider === 0) {
      return divider;
    }
    divider -= 1;
  }
  return divider;
};

const getTasksAndAnswers = () => {
  const minNumber = 1;
  const maxNumber = 50;
  const firstNum = generateNumber(minNumber, maxNumber);
  const secondNum = generateNumber(minNumber, maxNumber);
  const task = `${firstNum} ${secondNum}`;
  const answer = String(gcd(firstNum, secondNum));
  const questionAndAnswerForOneRound = [task, answer];

  return questionAndAnswerForOneRound;
};

export default () => {
  const tasksAndAnswers = [];
  for (let i = 0; i < roundCount; i += 1) {
    tasksAndAnswers.push(getTasksAndAnswers());
  }

  const rules = 'Find the greatest common divisor of given numbers.';
  runGame(rules, tasksAndAnswers);
};

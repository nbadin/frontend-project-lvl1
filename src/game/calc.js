import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

const mathOperation = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error('Unknown state!');
  }
};

const mathOperations = ['+', '-', '*'];

const getTasksAndAnswers = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const firstNum = generateNumber(minNumber, maxNumber);
  const secondNum = generateNumber(minNumber, maxNumber);
  const indexOfOperation = generateNumber(0, (mathOperations.length - 1));
  const operation = mathOperations[indexOfOperation];
  const task = `${firstNum} ${operation} ${secondNum}`;
  const answer = String(mathOperation(firstNum, secondNum, operation));
  const questionAndAnswerForOneRound = [task, answer];

  return questionAndAnswerForOneRound;
};

console.log(getTasksAndAnswers);

export default () => {
  const tasksAndAnswers = [];
  for (let i = 0; i < roundCount; i += 1) {
    tasksAndAnswers.push(getTasksAndAnswers());
  }

  const rules = 'What is the result of the expression?';
  runGame(rules, tasksAndAnswers);
};

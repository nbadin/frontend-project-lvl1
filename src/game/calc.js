import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

const resultOfMathOperation = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;

    case '-':
      return firstNum - secondNum;

    case '*':
      return firstNum * secondNum;

    default:
      throw new Error('Unknown operation!');
  }
};

const mathOperations = ['+', '-', '*'];

const generateQuestionAndAnswer = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const firstNum = generateNumber(minNumber, maxNumber);
  const secondNum = generateNumber(minNumber, maxNumber);
  const indexOfOperation = generateNumber(0, (mathOperations.length - 1));
  const operation = mathOperations[indexOfOperation];
  const task = `${firstNum} ${operation} ${secondNum}`;
  const answer = String(resultOfMathOperation(firstNum, secondNum, operation));
  const questionAndAnswerForOneRound = [task, answer];

  return questionAndAnswerForOneRound;
};

export default () => {
  const tasksAndAnswers = [];

  for (let i = 0; i < roundCount; i += 1) {
    tasksAndAnswers.push(generateQuestionAndAnswer());
  }

  const rules = 'What is the result of the expression?';

  runGame(rules, tasksAndAnswers);
};

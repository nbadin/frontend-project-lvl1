import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

const calculate = (firstNum, secondNum, operator) => {
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

const generateRound = () => {
  const firstNum = generateNumber(1, 100);
  const secondNum = generateNumber(1, 100);
  const operationIndex = generateNumber(0, (mathOperations.length - 1));
  const operator = mathOperations[operationIndex];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const answer = String(calculate(firstNum, secondNum, operator));

  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundCount; i += 1) {
    rounds.push(generateRound());
  }

  const rules = 'What is the result of the expression?';
  runGame(rules, rounds);
};

import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

const findGCD = (firstNumber, secondNumber) => {
  let divider = Math.min(firstNumber, secondNumber);

  while (divider > 0) {
    if (firstNumber % divider === 0 && secondNumber % divider === 0) {
      return divider;
    }

    divider -= 1;
  }

  return divider;
};

const generateRound = () => {
  const firstNum = generateNumber(2, 50);
  const secondNum = generateNumber(2, 50);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(findGCD(firstNum, secondNum));

  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundCount; i += 1) {
    rounds.push(generateRound());
  }

  const rules = 'Find the greatest common divisor of given numbers.';
  runGame(rules, rounds);
};

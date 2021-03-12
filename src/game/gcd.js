import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

const findGCD = (firstNumber, secondNumber) => {
  let divider = secondNumber;

  while (divider > 0) {
    if (firstNumber % divider === 0 && secondNumber % divider === 0) {
      return divider;
    }

    divider -= 1;
  }

  return divider;
};

const generateRound = () => {
  const minNumber = 1;
  const maxNumber = 50;
  const firstNum = generateNumber(minNumber, maxNumber);
  const secondNum = generateNumber(minNumber, maxNumber);
  const question = `${firstNum} ${secondNum}`;
  const answer = String(findGCD(firstNum, secondNum));
  const dataForRound = [question, answer];

  return dataForRound;
};

export default () => {
  const questionsAndAnswers = [];

  for (let i = 0; i < roundCount; i += 1) {
    questionsAndAnswers.push(generateRound());
  }

  const rules = 'Find the greatest common divisor of given numbers.';
  runGame(rules, questionsAndAnswers);
};

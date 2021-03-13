import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const minNumber = 1;
  const maxNumber = 200;
  const question = generateNumber(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundCount; i += 1) {
    rounds.push(generateRound());
  }

  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  runGame(rules, rounds);
};

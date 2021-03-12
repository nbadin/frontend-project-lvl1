import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const minNumber = 1;
  const maxNumber = 200;
  const question = generateNumber(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  const dataForRound = [question, answer];

  return dataForRound;
};

export default () => {
  const questionsAndAnswers = [];

  for (let i = 0; i < roundCount; i += 1) {
    questionsAndAnswers.push(generateRound());
  }

  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  runGame(rules, questionsAndAnswers);
};

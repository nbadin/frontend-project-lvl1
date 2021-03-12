import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const minNumber = 1;
  const maxNumber = 120;
  const question = String(generateNumber(minNumber, maxNumber));
  const answer = isPrime(question) ? 'yes' : 'no';
  const dataForRound = [question, answer];

  return dataForRound;
};

export default () => {
  const questionsAndAnswers = [];

  for (let i = 0; i < roundCount; i += 1) {
    questionsAndAnswers.push(generateRound());
  }

  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(rules, questionsAndAnswers);
};

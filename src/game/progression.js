import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

const getQuestion = (first, step, hiddenNumberIndex) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    const element = i === hiddenNumberIndex ? '..' : String(first + (i * step));
    progression.push(element);
  }
  return progression.join(' ');
};

const generateRound = () => {
  const first = generateNumber(1, 100);
  const step = generateNumber(1, 10);
  const hiddenNumberIndex = generateNumber(1, 10);
  const question = getQuestion(first, step, hiddenNumberIndex);
  const answer = String(first + (step * hiddenNumberIndex));

  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundCount; i += 1) {
    rounds.push(generateRound());
  }

  const rules = 'What number is missing in the progression?';
  runGame(rules, rounds);
};
